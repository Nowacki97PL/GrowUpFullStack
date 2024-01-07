import React from 'react';
import ReactDOM from 'react-dom/client';
import moduleName from 'react-'

import App from './App';
import './index.css';
import './bootstrap.css';

const rootElement = document.getElementById('root');

// Użyj createRoot zamiast ReactDOM.render
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
