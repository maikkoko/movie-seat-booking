import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// eslint-ignore-next-line
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
