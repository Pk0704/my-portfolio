import React from 'react';
import ReactDOM from 'react-dom/client';  // React 18+
import App from './App';
import './index.css';                     // bring in your global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
