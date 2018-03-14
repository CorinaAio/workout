import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import AppContainer from './containers/app-container';


ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
