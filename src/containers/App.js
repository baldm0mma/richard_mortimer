import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCharacters } from '../apiCalls/apiCalls';
import { sendAllCharacters } from '../actions';
import { Route } from 'react-router-dom';
import AllCharacters from './AllCharacters';
import './App.css';

export class App extends Component {

  componentDidMount = async () => {
    const results = await getAllCharacters(this.props.page);
    console.log(results);
    this.props.onReceivingAllCharacters(results);
  }

  render = () => {
    return (
      <Route exact path='/main' component={AllCharacters}></Route>
    )
  }
}

export const mapStateToProps = ({ allCharacters, currentCharacter, page }) => ({
  allCharacters,
  currentCharacter,
  page
});

export const mapDispatchToProps = dispatch => ({
  onReceivingAllCharacters: (results) => dispatch(sendAllCharacters(results))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);