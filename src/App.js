import React, { Component } from "react";
import UserSearch from "./components/UserSearch";
import "./main.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Search from "./components/Search";
class App extends Component {
  
  render() {
    return (
      
      <div className="search-container">
        
        <Router>
        <Header />
        <Route path="/" exact component={Search} />
        <Route path="/about"component={About}/>
        
        </Router>

      </div>
     
    );
  }
}

export default App;
