import React from 'react';

import './likert.css';

// Using a Class component because it is easier to test when using `npm link`, which has problems
// with hooks.
class LikertScale extends React.Component {
  /**
   * @param {object} props
   * @param {object[]} props.responses A list of possible responses to the question.
   * @param {string} props.id A unique ID. This is used primarily for accessibility reasons.
   * @param {string} [props.question] The question that this likert scale is for. Leave blank if you want to format the question yourself.
   * @param {string} [props.layout] Controls position of the question text
   * @param {boolean|number} [props.flexible] Controls the spacing of the radio buttons.
   * @param {string} [props.className]
   * @param {React.Ref} [props.likertRef]
   */
  constructor(props) {
    super(props);

    let checkedIndex;
    if (Array.isArray(props.responses)) {
      checkedIndex = props.responses.findIndex((item) => item.checked);
    }
    this.state = {
      isKeyboardUser: false,
      checkedIndex,
    };
    if (props.id) {
      this.id = props.id;
    } else if (props.question) {
      this.id = hashFn(props.question);
    } else {
      this.id = Date.now();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.listenForTab);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.listenForTab);
  }

  render() {
    const {
      responses,
      question,
      layout = 'auto',
      flexible = true,
      className = '',
      likertRef,
      ...restProps
    } = this.props;

    delete restProps.picked;
    delete restProps.onChange;

    let flexGrow = null;
    if (!flexible) {
      flexGrow = { flexGrow: 0 };
    }
    if (typeof flexible === 'number' && parseInt(flexible) !== 4) {
      flexGrow = { flexGrow: parseInt(flexible) };
    }

    const radios = responses.map((response, idx) => {
      const uniqueKey = `${this.id}${idx}`;
      return (
        <label key={uniqueKey} htmlFor={uniqueKey} className='likertResponse'>
          <span className='likertLine' />
          <span className='likertLine' />
          <input
            type='radio'
            value={response.value}
            name={this.id}
            id={uniqueKey}
            className='visuallyHidden'
            data-index={idx}
            onChange={this.onChange}
            checked={this.state.checkedIndex === idx}
          />
          <span className='likertIndicator' />
          <span className='likertText'>{response.text}</span>
        </label>
      );
    });

    let cn = 'likertScale';
    cn += className ? ` ${className}` : '';
    cn += this.state.isKeyboardUser ? ' isKeyboardUser' : '';
    cn += layout === 'stacked' ? ' layout--stacked' : '';

    return (
      <fieldset
        className={cn}
        ref={likertRef}
        id={this.id}
        {...restProps}
        aria-labelledby={`legend-${this.id}`}
      >
        {/* Normally the following line would be a <legend> tag but that does not play well with Flexbox. */}
        {question && (
          <div id={`legend-${this.id}`} className='likertLegend'>
            {question}
          </div>
        )}
        <div className='likertBand' style={flexGrow}>
          {radios}
        </div>
      </fieldset>
    );
  }

  onChange = (evt) => {
    this.setState({ checkedIndex: parseInt(evt.target.getAttribute('data-index')) });
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(this.getResponsesItem(evt.target.value));
    } else if (typeof this.props.picked === 'function') {
      // eslint-disable-next-line no-console
      console.warn(
        'Deprecation: The “picked” callback has been renamed; use “onChange” instead.'
      );
      this.props.picked(this.getResponsesItem(evt.target.value));
    }
  };

  listenForTab = (evt) => {
    if (evt.key === 'Tab') {
      this.setState({ isKeyboardUser: true });
    }
  };

  getResponsesItem = (value) => {
    // TODO: Harden this code and write tests
    return this.props.responses.find((item) => item.value == value);
  };
}

export default React.forwardRef((props, ref) => (
  <LikertScale {...props} likertRef={ref} />
));

// This comes from https://github.com/darkskyapp/string-hash
function hashFn(str) {
  let hash = 5381;
  let i = str.length;

  while (i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  return hash >>> 0;
}
