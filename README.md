React Likert Scale
======================================

React Likert Scale is a [React component](https://reactjs.org/docs) that renders a Likert Scale. It
is fully responsive, very small size (about 9kb), and the styling can be customized by providing
your own CSS styles.

![Screenshot of Likert component](./likert.png)

## Installation

`npm install -P react-likert-scale`


## Usage

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
      { value: 5, text: "Excellent" }
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
* `picked` — (callback function) Optionally, you can provide a callback function that returns the
  value of the option that was clicked.

## FAQ

### How do I change colors or other CSS styling?

The top-level DOM element that gets created by this component is `<fieldset class="likertScale">`.
You can override any styles by prefixing your rule with `fieldset.likertScale`. For example, let’s
say you want the radio button “dots” to have a light gray background with a dark green ring.

```
fieldset.likertScale .likertIndicator {
  border: thin solid darkGreen;
  background-color: lightGray;
}
```

### I need access to the DOM element created by React. How is that done?

This isn’t very common, but you may want to set focus on a Likert Scale after the page renders. This
is done with React via `refs`. Either create your ref with `React.createRef()` or the `useRef()`
hook. You can then pass your `ref` to the Likert component.

```javascript
import React, { useRef } from 'react';
import Likert from 'react-likert-scale';

export default () => {
  const likertOptions = {
    question: "What is your opinion of the President’s performance?",
    responses: [
      { value: 1, text: "Abysmal" },
      { value: 2, text: "Poor" },
      { value: 3, text: "Average" },
      { value: 4, text: "Good" },
      { value: 5, text: "Excellent" }
    ]
  };

  const likertRef = useRef();

  return (
    <Likert {...likertOptions} ref={likertRef} />
  )
}
```

### Can I pass in DOM attributes such as `id`, `class`, `disabled`, `data-*`, `onClick`, etc.?

Sure. They will be applied to the likert component’s top-level DOM element, `<fieldset>`. e.g.:

```javascript
<Likert {...likertOptions}
  id='Q1'
  className='myClass'
  onClick={() => {
    doThis();
    andThis();
  }}
/>
```
