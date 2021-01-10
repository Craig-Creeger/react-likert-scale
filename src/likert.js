import React from 'react';
import SHA1 from 'crypto-js/sha1';

import './likert.css';

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
		const { question, responses, fieldsetId } = this.props;
		const sha = String(SHA1(question)).substring(0, 7);
		const radios = responses.map((response, idx) => {
			const uniqueKey = `${sha}${idx}`;
			return (
				<label key={uniqueKey} htmlFor={uniqueKey} className='likertResponse'>
					<span className='likertLine' />
					<span className='likertLine' />
					<input
						type='radio'
						value={response.value}
						name={sha}
						id={uniqueKey}
						className='visuallyHidden'
						onClick={this.chosen}
					/>
					<span className='likertIndicator' />
					<span className='likertText'>{response.text}</span>
				</label>
			);
		});

		return (
			<fieldset
				id={fieldsetId || Math.random().toString(36).substr(2)}
				className={`likertScale${
					this.state.isKeyboardUser ? ' isKeyboardUser' : ''
				}`}>
				<legend>{question}</legend>
				<div className='likertBand'>{radios}</div>
			</fieldset>
		);
	}

	chosen = evt => {
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

export default LikertScale;
