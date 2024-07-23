import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa desde 'react-dom/client'
import App from './App';
import './index.css'; // Importa cualquier archivo CSS global aquí, si tienes uno

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
