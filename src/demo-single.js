import React, { useRef, useState } from 'react';
import Likert from './likert.js';

const likertOptions = {
  question: 'What is your opinion of the President of the United State’s performance?',
  responses: [
    { value: 1, text: 'Abysmal' },
    { value: 2, text: 'Poor' },
    { value: 3, text: 'Average' },
    { value: 4, text: 'Good' },
    { value: 5, text: 'Excellent' },
  ],
};

export default function DemoSingle() {
  const refLikert = useRef(null);
  const [chosen, setChosen] = useState({});

  return (
    <>
      <Likert
        {...likertOptions}
        onChange={setChosen}
        ref={refLikert}
        // onClick={() => console.log('pretzels')}
        // id='steckerlfisch'
        // className='donuts'
      />
      <p>
        You chose: <strong>{chosen.value}—{chosen.text}</strong>
      </p>
    </>
  );
}

