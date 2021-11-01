import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import EquipeProvider from './contexts/EquipeContext';

ReactDOM.render(
  <React.StrictMode>
    <EquipeProvider>
      <App />
    </EquipeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
