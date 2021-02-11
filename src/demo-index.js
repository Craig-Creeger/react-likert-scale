import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import DemoInteraction from './demo-interaction.js';
import DemoMultiple from './demo-multiple.js';
import DemoGrid from './demo-grid.js';

function PreviewComponent() {
  const [version, setVersion] = useState('interaction');

  let scenario = null;

  switch (version) {
    case 'interaction':
      scenario = <DemoInteraction />;
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
        <button onClick={() => setVersion('interaction')}>Interaction</button>{' '}
        <button onClick={() => setVersion('multiple')}>Auto-layout</button>{' '}
        <button onClick={() => setVersion('grid')}>Grid layout</button>
      </p>
      {scenario}
    </>
  );
}

ReactDOM.render(<PreviewComponent />, document.getElementsByTagName('body')[0]);
