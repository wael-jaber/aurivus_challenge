import React from 'react';
import './App.css';
import { LeftPanel } from './containers';
import { Provider } from 'react-redux';
import { store } from './redux';

function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <div className="flex h-screen w-screen">
        <div className="w-2/12 min-w-44 bg-gray-100 border-r border-gray-300">
          <LeftPanel />
        </div>
        <div className="w-10/12 bg-white">
          <div className="p-4">Right Panel</div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
