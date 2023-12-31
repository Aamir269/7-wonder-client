import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import { AuthProviderWrapper } from './Context/context.auth.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import $ from 'jquery'; // Import jQuery
import 'popper.js/dist/umd/popper.min.js'; // Import Popper.js
import 'bootstrap/dist/js/bootstrap.min.js'; // Import Bootstrap JavaScript
import Map from './Pages/Map/map.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>
        <App />
      </AuthProviderWrapper>
    </Router>
  </React.StrictMode>,
);
