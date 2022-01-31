import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './static/css/index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Header,
  Footer,
  Home,
  Register,
} from './components';

ReactDOM.render(
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={ <Home /> } />,
      <Route path='/register' element={ <Register /> } />
    </Routes>
    < Footer />
  </Router>,

  document.getElementById('root')
);
