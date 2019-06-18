import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.js';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker()
