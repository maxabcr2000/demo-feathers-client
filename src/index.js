import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FeathersClient from './utils/feathers';
import registerServiceWorker from './registerServiceWorker';

const client = new FeathersClient();
ReactDOM.render(<App client={client}/>, document.getElementById('root'));
registerServiceWorker();
