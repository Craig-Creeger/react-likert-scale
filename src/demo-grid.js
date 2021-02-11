import React from 'react';
import Likert from './likert.js';

export default function DemoGrid() {
  // const [chosen, setChosen] = useState({});

  return (
    <>
      <style>{`
        .grid {
          display: inline-grid;
          grid-template-columns: auto auto;
        }
      `}</style>
      <h1>Grid Layout</h1>
      <div className='grid'>
        <p>How was your service today?</p>
        <Likert
          id='1'
          responses={[
            { value: 1, text: 'Poor' },
            { value: 2, text: '' },
            { value: 5, text: '' },
            { value: 6, text: '' },
            { value: 7, text: 'Excellent' },
          ]}
        />
        <p>How many minutes did it take for your food arrive?</p>
        <Likert
          id='2'
          responses={[
            { value: 5, text: '5' },
            { value: 10, text: '10' },
            { value: 15, text: '15' },
            { value: 20, text: '20' },
            { value: 25, text: '25' },
            { value: 30, text: '30+' },
          ]}
        />
        <p>How did your meal taste?</p>
        <Likert
          id='3'
          responses={[
            { value: 3, text: 'Horrible' },
            { value: 4, text: 'Meh' },
            { value: 5, text: 'OK' },
            { value: 6, text: 'Pretty good' },
            { value: 7, text: 'Amazing' },
          ]}
        />
        <p>How likely are you to return again?</p>
        <Likert
          id='4'
          responses={[
            { value: 5, text: 'Never' },
            { value: 10, text: 'Maybe' },
            { value: 15, text: 'Probably' },
            { value: 20, text: 'Definitely' },
          ]}
        />
      </div>
    </>
  );
}
