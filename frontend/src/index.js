import React from 'react';
import ReactDOM from 'react-dom';
import './10-Rom-Recs/index.scss';
import App from './10-Rom-Recs/app';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App/>
      </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);

