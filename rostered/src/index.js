import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import rosteredData from './datasample.js';
// import apiTest from './api.js';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App stats={rosteredData} />, document.getElementById('root'));
registerServiceWorker();
