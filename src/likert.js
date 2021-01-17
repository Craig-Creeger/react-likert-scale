import React from 'react'

import './likert.css'

// Using a Class component because it is easier to test when using `npm link`, which has problems
// with hooks.
class LikertScale extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			isKeyboardUser: false
		};
	}

	componentDidMount () {
		document.addEventListener('keydown', this.listenForTab);
	}
	componentWillUnmount () {
		document.removeEventListener('keydown', this.listenForTab);
	}

	render () {
		const { question, responses, id, className = '', likertRef, ...restProps } = this.props;

		const hash = hashFn(question)
		const radios = responses.map((response, idx) => {
			const uniqueKey = `${hash}${idx}`
			return (
				<label key={uniqueKey} htmlFor={uniqueKey} className='likertResponse'>
					<span className='likertLine' />
					<span className='likertLine' />
					<input
						type='radio'
						value={response.value}
						name={hash}
						id={uniqueKey}
						className='visuallyHidden'
						onClick={this.onChosen}
					/>
					<span className='likertIndicator' />
					<span className='likertText'>{response.text}</span>
				</label>
			)
		})

		let cn = 'likertScale'
		cn += (className ? ` ${className}` : '')
		cn += this.state.isKeyboardUser ? ' isKeyboardUser' : ''

		return (
			<fieldset
				className={cn}
				ref={likertRef}
				id={id || hash}
				{...restProps}
			>
				<legend>{question}</legend>
				<div className='likertBand'>{radios}</div>
			</fieldset>
		)
	}
	
	onChosen = evt => {
		if (typeof this.props.picked === 'function') {
			this.props.picked(evt.target.value);
		}
	};

	listenForTab = evt => {
		if (evt.key === 'Tab') {
			this.setState({ isKeyboardUser: true });
		}
	};

}

export default React.forwardRef((props, ref) => <LikertScale {...props} likertRef={ref} />)

// This comes from https://github.com/darkskyapp/string-hash
function hashFn(str) {
	let hash = 5381
	let i = str.length;

	while(i) {
		hash = (hash * 33) ^ str.charCodeAt(--i);
	}

	return hash >>> 0;
}