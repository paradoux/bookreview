
//React imports
import React, { Component } from 'react';

//Files imports
import Card from './components/Card'
import Form from './components/Form'

//Style imports
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Card />
        <Form />
      </div>
    );
  }
}

export default App;
