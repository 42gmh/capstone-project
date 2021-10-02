import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import MarioContextProvider from './components/MarioContext';

ReactDOM.render(
  <MarioContextProvider>
    <Router>
      <App />
    </Router>
  </MarioContextProvider>,
  document.getElementById('root')
);