import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Router from './routers/router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router />, document.getElementById('app-root'));

serviceWorker.unregister();
