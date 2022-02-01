import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import AppContext from './context/AppContext';

ReactDOM.render(
  <React.StrictMode>
    <AppContext>
      <App />
      </AppContext>
  </React.StrictMode>,
  document.getElementById('root')
);