import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import md5 from 'md5'

import './likert.css'

function LikertScale({ question, responses, picked, id, className = '', ...restProps }, ref) {
	const [isKeyboardUser, setIsKeyboardUser] = useState(false)

	const listenForTab = evt => {
		if (evt.key === 'Tab') {
			setIsKeyboardUser(true)
		}
	}

	useEffect(() => {
		document.addEventListener('keydown', listenForTab)
		return () => {
			document.removeEventListener('keydown', listenForTab)
		}
	}, [])

	const onChosen = evt => {
		if (typeof picked === 'function') {
			picked(evt.target.value)
		}
	}

	const hash = String(md5(question)).substring(0, 7)
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
					onClick={onChosen}
				/>
				<span className='likertIndicator' />
				<span className='likertText'>{response.text}</span>
			</label>
		)
	})

	const cn = classNames('likertScale', className, {
		isKeyboardUser
	})

	return (
		<fieldset
			className={cn}
			ref={ref}
			id={id || hash}
			{...restProps}
		>
			<legend>{question}</legend>
			<div className='likertBand'>{radios}</div>
		</fieldset>
	)
}

export default React.forwardRef(LikertScale)
