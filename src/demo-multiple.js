import React from 'react';
import Likert from './likert.js';

export default function DemoMultiple() {
  // const [chosen, setChosen] = useState({});

  return (
    <>
      <Likert
        question='How was your service today?'
        responses={[
          { value: 1, text: 'Poor' },
          { value: 2, text: '' },
          { value: 3, text: '' },
          { value: 4, text: '' },
          { value: 5, text: '' },
          { value: 6, text: '' },
          { value: 7, text: 'Excellent' },
        ]}
      />
      <Likert
        question='How many minutes did it take for your food arrive?'
        responses={[
          { value: 5, text: '5' },
          { value: 10, text: '10' },
          { value: 15, text: '15' },
          { value: 20, text: '20' },
          { value: 25, text: '25' },
          { value: 30, text: '30+' },
        ]}
      />
      <Likert
        question='Taste?'
        responses={[
          { value: 1, text: 'Complete garbage'},
          { value: 2, text: 'Was it food?'},
          { value: 3, text: 'No flavor'},
          { value: 4, text: 'Meh'},
          { value: 5, text: 'OK'},
          { value: 6, text: 'Not too shabby'},
          { value: 7, text: 'Amazing'},
          { value: 8, text: 'Best. Meal. Ever.'},
        ]}
      />
      <Likert
        question='How likely are you to return again?'
        responses={[
          { value: 5, text: 'Never' },
          { value: 10, text: 'Maybe' },
          { value: 15, text: 'Probably' },
          { value: 20, text: 'Definitely' },
        ]}
      />
      <Likert
        flexible={false}
        question='Short question?'
        responses={[
          { value: 5, text: '😡' },
          { value: 10, text: '☹️' },
          { value: 15, text: '😐' },
          { value: 20, text: '😃' },
        ]}
      />
      <Likert
        flexible={false}
        question='Medium length question text?'
        responses={[
          { value: 5, text: '😡' },
          { value: 10, text: '☹️' },
          { value: 15, text: '😐' },
          { value: 20, text: '😃' },
        ]}
      />
      <Likert
        flexible={false}
        question='Long question text to demonstrate the layout effect?'
        responses={[
          { value: 5, text: '😡' },
          { value: 10, text: '☹️' },
          { value: 15, text: '😐' },
          { value: 20, text: '😃' },
        ]}
      />
    </>
  );
}
