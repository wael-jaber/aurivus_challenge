import React from 'react';
import './App.css';
import { LeftPanel, RightPanel } from './containers';
import { Provider } from 'react-redux';
import { store } from './redux';
import { enableMapSet } from 'immer';

// Enable Map and Set support for Immer
enableMapSet();

function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <div className="flex h-screen w-screen">
        <div className="w-2/12 min-w-44 bg-gray-100 border-r border-gray-300">
          <LeftPanel />
        </div>
        <div className="w-10/12 bg-white">
          <RightPanel />
        </div>
      </div>
    </Provider>
  );
}

export default App;
