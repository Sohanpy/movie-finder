import React, { Component } from "react";
import nav from "./nav";
import SearchBox from "./SearchBox";

import MovieList from "./MovieList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchItem: ""
    };
    this.apiKey = "a63db4d8ed9a5af15e2dd254142cdf3f";
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchItem}`
    )
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({ movies: [...data.results] });
      });
  };

  handleChange = e => {
    this.setState({ searchItem: e.target.value });
  };

  render() {
    return (
      <div>
        <nav />
        <SearchBox
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}
export default App;
