import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Header,
  Footer,
  Home,
} from "./components";

ReactDOM.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={ <Home /> } />
    </Routes>
    < Footer />
  </Router>,

  document.getElementById('root')
);
