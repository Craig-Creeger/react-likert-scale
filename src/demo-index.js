import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import DemoSingle from './demo-single.js';
import DemoMultiple from './demo-multiple.js';

function PreviewComponent() {
  const [version, setVersion] = useState('multiple');

  let scenario = null;

  switch (version) {
    case 'single':
      scenario = <DemoSingle />;
      break;
    case 'multiple':
      scenario = <DemoMultiple />;
      break;
  }

  return (
    <>
      <p>
        <button onClick={() => setVersion('single')}>Single</button>{' '}
        <button onClick={() => setVersion('multiple')}>Multiple</button>
      </p>
      {scenario}
    </>
  );
}

ReactDOM.render(<PreviewComponent />, document.getElementsByTagName('body')[0]);
