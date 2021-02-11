import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import DemoSingle from './demo-single.js';
import DemoMultiple from './demo-multiple.js';
import DemoGrid from './demo-grid.js';

function PreviewComponent() {
  const [version, setVersion] = useState('single');

  let scenario = null;

  switch (version) {
    case 'single':
      scenario = <DemoSingle />;
      break;
    case 'multiple':
      scenario = <DemoMultiple />;
      break;
    case 'grid':
      scenario = <DemoGrid />;
      break;
  }

  return (
    <>
      <p>
        <button onClick={() => setVersion('single')}>Interaction</button>{' '}
        <button onClick={() => setVersion('multiple')}>Auto-layout</button>{' '}
        <button onClick={() => setVersion('grid')}>Grid layout</button>
      </p>
      {scenario}
    </>
  );
}

ReactDOM.render(<PreviewComponent />, document.getElementsByTagName('body')[0]);
