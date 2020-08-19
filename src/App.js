import React, { Component } from "react";
import UserSearch from "./components/UserSearch";
import "./main.css";

class App extends Component {
  state = {
    query: "",
    results: [],
  };
  handleInput = (event) => {
    event.preventDefault();
    this.fetchJsonData();
    /* const input = document.querySelector(".search-input");
    const inputValue = input.value;
    this.setState({ query: inputValue }, () => {
      this.fetchJsonData();
    }); */
  };
  fetchJsonData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ results: users }));
  };
  render() {
    return (
      <div className="search-container">
        <header className="header">
          <h1>UserSearch</h1>
        </header>
        <section className="search-panel">
          <form onSubmit={this.handleInput}>
            <input
              className="search-input"
              type="text"
              name="search-value"
              onChange={(e) => this.setState({ query: e.target.value })}
              placeholder="Enter search term..."
            />
            <button className="search-btn" type="submit">
              Search
            </button>
          </form>
        </section>
        <section className="search-results">
          <UserSearch users={this.state.results} query={this.state.query} />
        </section>
      </div>
    );
  }
}

export default App;
