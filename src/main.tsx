import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fas,
  faPhone,
  faQrcode,
  faGlobe,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';
import { far, faEnvelope, faFile } from '@fortawesome/free-regular-svg-icons';
import {
  fab,
  faFacebookF,
  faFacebookMessenger,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  fas,
  faPhone,
  faQrcode,
  faGlobe,
  faFile,
  faLaptopCode,
  far,
  faEnvelope,
  fab,
  faFacebookF,
  faFacebookMessenger,
  faGithub,
  faLinkedinIn
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
