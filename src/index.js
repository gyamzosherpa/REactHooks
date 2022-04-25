import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Routes1 from './Routes1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Routes1 />
  </React.StrictMode>
);
