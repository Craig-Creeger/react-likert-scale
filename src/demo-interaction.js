import React, { useRef, useState } from 'react';
import Likert from './likert.js';

const likertOptions = {
  question:
    'What is your opinion of the President of the United State’s performance?',
  responses: [
    { value: 1, text: 'Abysmal' },
    { value: 2, text: 'Poor' },
    { value: 3, text: 'Average', checked: true },
    { value: 4, text: 'Good' },
    { value: 5, text: 'Excellent' },
  ],
};

export default function DemoInteraction() {
  const refLikert = useRef(null);
  const [chosen, setChosen] = useState({});

  const getAlertMessage = () => {
    const rect = refLikert.current.getBoundingClientRect();
    return `This demonstrates how you can get access to the underlying DOM element.

This component is ${parseInt(rect.width)}px wide
and ${parseInt(rect.height)}px tall.`;
  };

  return (
    <>
      <h1>Interaction</h1>
      <p>
        This example demonstrates how you can customize the formatting (CSS
        styles) of the Likert scale.
      </p>
      <Likert
        {...likertOptions}
        onChange={setChosen}
        ref={refLikert}
        className='withBorder'
      />
      <p>
        You chose:{' '}
        <strong>
          {chosen.value}—{chosen.text}
        </strong>
        <br />
        <em>This demonstrates how you can get the value chosen by the user.</em>
      </p>
      <p><button onClick={() => alert(getAlertMessage())}>DOM Access via a React Ref</button></p>
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
