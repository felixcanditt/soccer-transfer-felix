import React from 'react';
import ReactDOM from 'react-dom';
import App from './base/App';
import GlobalStyles from './base/GlobalStyles';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
