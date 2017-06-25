import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoApp from './reducers'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let store=createStore(todoApp);

ReactDOM.render(<Provider ><APP /></Provider>, document.getElementById('root'));
registerServiceWorker();
