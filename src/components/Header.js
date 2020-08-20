import React, { Component } from "react";
import "./header.css";
import {Link , BrowserRouter as Router} from "react-router-dom";
import Search from "./Search";
import About from "./About";
export default class Header extends Component{
render(){
    return(
        <header className="header">
          <h1>UserSearch</h1>
          <ul>
              
            <Link to="/">
                <li>Search</li>
            </Link>
            <Link to="/about">
                <li>About</li>
            </Link>
            
         </ul>
        </header>
    )
}
}