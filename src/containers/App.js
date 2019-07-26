import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCharacters } from '../apiCalls/apiCalls';
import { sendAllCharacters, userName } from '../actions';
import { Route } from 'react-router-dom';
import AllCharacters from './AllCharacters';
import Monitor from './Monitor';
import { randomizeNames } from '../randomNames';
import './App.css';

export class App extends Component {

  componentDidMount = async () => {
    const results = await getAllCharacters(this.props.page);
    // console.log('fetch results', results);
    this.props.onReceivingAllCharacters(results);
    const name = randomizeNames();
    // console.log('name', name);
    await this.props.getUserName(name);
  }

  render = () => {
    return (
      <>
        <Route exact path='/' component={Monitor}></Route>
        <Route path='/main' component={AllCharacters}></Route>
      </>
    )
  }
}

export const mapStateToProps = ({ allCharacters, currentCharacter, page, userName }) => ({
  // allCharacters,
  // currentCharacter,
  page,
  // userName
});

export const mapDispatchToProps = dispatch => ({
  onReceivingAllCharacters: results => dispatch(sendAllCharacters(results)),
  getUserName: name => dispatch(userName(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);