import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './share/app.react'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
