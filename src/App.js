import React, { Component } from 'react';
import { getAllCharacters } from './apiCalls';
import './App.css';

export class App extends Component {

  componentDidMount = async () => {
    const results = await getAllCharacters();
    console.log(results);
  }

  render = () => {
    return <div>hello world</div>
  }
}

export default App;