/* When testing locally, it is helpful to do an `npm link`. 
/Users/craig/.nvm/versions/node/v10.14.1/lib/node_modules/react-likert-scale -> /Users/craig/Sites/react-likert-scale
*/
import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Likert from './likert.js';

const likertOptions = {
  question: 'What is your opinion of the President’s performance?',
  responses: [
    { value: 1, text: 'Abysmal' },
    { value: 2, text: 'Poor' },
    { value: 3, text: 'Average' },
    { value: 4, text: 'Good' },
    { value: 5, text: 'Excellent' },
  ],
  onChange: (val) => {
    // eslint-disable-next-line no-console
    console.log(val);
  },
};

function PreviewComponent() {
  const refLikert = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(refLikert.current);
  });

  return (
    <Likert
      {...likertOptions}
      ref={refLikert}
      // eslint-disable-next-line no-console
      // onClick={() => console.log('pretzels')}
      // id='steckerlfisch'
      // className='donuts'
    />
  );
}

ReactDOM.render(<PreviewComponent />, document.getElementsByTagName('body')[0]);
