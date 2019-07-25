import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCharacters } from '../apiCalls/apiCalls';
import { sendAllCharacters, sendSingleCharacter } from '../actions';
import './App.css';

export class App extends Component {

  componentDidMount = async () => {
    const results = await getAllCharacters(this.props.page);
    console.log(results);
    this.props.onReceivingAllCharacters(results);
  }

  render = () => {
    return <div>hello world</div>
  }
}

export const mapStatetoProps = ({ allCharacters, currentCharacter, page }) => ({
  allCharacters,
  currentCharacter,
  page
});

export const mapDispatchToProps = dispatch => ({
  onReceivingAllCharacters: (results) => dispatch(sendAllCharacters(results))
})

export default connect(mapStatetoProps, mapDispatchToProps)(App);