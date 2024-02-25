import React from 'react';
import ReactDOM from 'react-dom/client';

import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

import './css/index.css';
import App from './App';

Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // render component twice
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);