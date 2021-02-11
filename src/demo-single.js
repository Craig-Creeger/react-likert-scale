import React, { useRef, useState } from 'react';
import Likert from './likert.js';

const likertOptions = {
  question: 'What is your opinion of the President of the United State’s performance?',
  responses: [
    { value: 1, text: 'Abysmal' },
    { value: 2, text: 'Poor' },
    { value: 3, text: 'Average', checked: true },
    { value: 4, text: 'Good' },
    { value: 5, text: 'Excellent' },
  ],
};

export default function DemoSingle() {
  const refLikert = useRef(null);
  const [chosen, setChosen] = useState({});

  return (
    <>
      <h1>Interaction</h1>
      <Likert
        {...likertOptions}
        onChange={setChosen}
        ref={refLikert}
        onClick={() => console.log('it was clicked')}
        className='withBorder'
      />
      <p>
        You chose: <strong>{chosen.value}—{chosen.text}</strong>
      </p>
      <style>{`
        .withBorder {
          padding: 1em;
          border: thin solid darkgreen;
          border-radius: 1em;
        }
      `}</style>
    </>
  );
}

