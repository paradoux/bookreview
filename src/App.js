
//React imports
import React, { Component } from 'react';

//Files imports
import BookList from './containers/BookList'
import SearchBar from './containers/SearchBar'

//Style imports
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <BookList />

      </div>
    );
  }
}

export default App;
