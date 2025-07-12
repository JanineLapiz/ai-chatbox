import { JSX } from 'react';
import { createRoot } from 'react-dom/client';

const rootNode = document.getElementById('root');

if (rootNode) {
  const root = createRoot(rootNode);

  const App = (): JSX.Element => {
    return <div className="app">Hello</div>;
  };

  root.render(<App />);
}

console.error(`rootNode is undefined in App.tsx`);
