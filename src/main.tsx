import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faPhone, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { far, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  fab,
  faFacebookF,
  faFacebookMessenger,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  fas,
  faPhone,
  faQrcode,
  far,
  faEnvelope,
  fab,
  faFacebookF,
  faFacebookMessenger
);
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
