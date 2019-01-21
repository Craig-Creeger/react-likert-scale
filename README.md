React Likert Scale
======================================

React Likert Scale is a [React component](https://reactjs.org/docs) that renders a Likert Scale. It is fully responsive and the styling can be customized by providing your own CSS styles.

![Screenshot of Likert component](./likert.png)

## Installation

`npm install --save react-likert-scale`


## Usage

React Likert Scale is a JavaScript library that can be used as an ES2015 Module or UMD.

### ES2015 Module

```javascript
import React from 'react';
import Likert from 'react-likert-scale';

export default () => {
  const likertOptions = {
    question: "What is your opinion of the President’s performance?",
    responses: [
      { value: 1, text: "Abysmal" },
      { value: 2, text: "Poor" },
      { value: 3, text: "Average" },
      { value: 4, text: "Good" },
      { value: 5, text: "Most Excellent, Ted" }
    ],
    picked: val => {
      console.log(val);
    }
  };
  return (
    <Likert {...likertOptions} />
  )
}
```

### Likert Props

This component has three `props`:
* `question` — (string) This is the prompt that displays above the options.
* `responses` — (array of objects) These are your options. The `value` key is what is returned to
  the calling application in the `picked` callback.
* `picked` — (function) Optionally, you can provide a callback function that returns the value of
  the option that a user clicks on.