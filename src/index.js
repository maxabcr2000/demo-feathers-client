import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FeathersClient from './utils/feathers';
import registerServiceWorker from './registerServiceWorker';

const feathersAPI = new FeathersClient();
ReactDOM.render(<App feathersAPI={feathersAPI}/>, document.getElementById('root'));
registerServiceWorker();
