// Import React and createRoot
import React from 'react';
import { createRoot } from 'react-dom';

// Import your styles and components
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create a React root
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
