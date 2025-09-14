import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App.jsx'
import '../index.css'

// 1. Find the DOM element with the ID 'root' from index.html
const rootElement = document.getElementById('root');

// 2. Create a React root for that DOM element
const root = ReactDOM.createRoot(rootElement);

// 3. Render our main <App /> component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)