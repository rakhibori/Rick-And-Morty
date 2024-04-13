import React from 'react';
import ReactDOM from 'react-dom';
import App from './App1'

// Using Method React Router Dom
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // Using Method React Router Dom
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)