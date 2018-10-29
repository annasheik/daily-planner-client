import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app';
import {BrowserRouter as Router} from 'react-router-dom';
import 'normalize.css'
import './css/index.css';
import './css/normalize.css'
import store from './store';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
	<Provider store={store}>
	<Router>
	<App/>
	</Router>
      </Provider>, 
      document.getElementById('root'));
registerServiceWorker();
