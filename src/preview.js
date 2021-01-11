import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Likert from './likert';

const likertOptions = {
	question: 'What is your opinion of the President’s performance?',
	responses: [
		{ value: 1, text: 'Abysmal' },
		{ value: 2, text: 'Poor' },
		{ value: 3, text: 'Average' },
		{ value: 4, text: 'Good' },
		{ value: 5, text: 'Excellent' }
	],
	picked: val => {
		// eslint-disable-next-line no-console
		console.log(val);
	}
};

function PreviewComponent () {
	const refLikert = useRef(null)

	useEffect(() => {
		// eslint-disable-next-line no-console
		console.log(refLikert.current)
	})

	return (
		<Likert {...likertOptions}
			ref={refLikert}
			id='steckerlfisch'
			// eslint-disable-next-line no-console
			onClick={() => console.log('pretzels')}
			className='donuts'
		/>
	)
}

ReactDOM.render(<PreviewComponent />, document.getElementsByTagName('body')[0]);
