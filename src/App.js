
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
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-12">
            <SearchBar />
          </div>
        </div>
        <div className="row justify-content-md-center">

          <div className="col-md-12">
            <BookList />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
