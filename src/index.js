import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.component';
import AppProvider from './App.context';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
