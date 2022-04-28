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
  App,
  Login,
  Questions,
  SubmitQuestion,
} from './components';

ReactDOM.render(
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={ <Home /> } />,
      <Route path='/register' element={ <Register /> } />,
      <Route path='/app' element={ <App  /> } />,
      <Route path='/login' element={ <Login  /> } />,
      <Route path='/questions' element={ <Questions /> } />,
      <Route path='/submitQuestion' element={ <SubmitQuestion /> } />,
    </Routes>
    < Footer />
  </Router>,

  document.getElementById('root')
);
