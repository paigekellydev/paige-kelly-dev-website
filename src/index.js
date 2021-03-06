import React from 'react';
import ReactDOM from 'react-dom';
import '../src/stylesheets/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Favicon from 'react-favicon'

ReactDOM.render(
  <React.StrictMode>
    <Favicon url="https://i.imgur.com/RivopOE.png"/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
