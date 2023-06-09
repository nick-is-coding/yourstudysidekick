import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "typeface-open-sans";
import characters from './components/characters';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App characters={characters}/>
  </React.StrictMode>
);