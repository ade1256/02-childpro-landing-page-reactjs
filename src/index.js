import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './dist/css/bootstrap.min.css';
import './dist/css/font-awesome.min.css';
import './dist/css/style.css';
import App from './App';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
