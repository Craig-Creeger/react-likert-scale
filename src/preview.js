import React from 'react';
import ReactDOM from 'react-dom';
import Likert from './likert';

const likertOptions = {
	question: 'What is your opinion of the President’s performance?',
	responses: [
		{ value: 1, text: 'Abysmal' },
		{ value: 2, text: 'Poor' },
		{ value: 3, text: 'Average' },
		{ value: 4, text: 'Good' },
		{ value: 5, text: 'Most Excellent, Ted' }
	],
	picked: val => {
		console.log(val);
	}
};

ReactDOM.render(<Likert {...likertOptions} />, document.getElementsByTagName('body')[0]);
