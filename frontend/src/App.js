import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Post from "./Component/Post/index";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Post} />
    </Router>
    );
  }
}

export default App;
