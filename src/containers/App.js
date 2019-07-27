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
    // const initialLoadingPages = [1, 2, 3, 4, 5];
    // initialLoadingPages.map(page =>)
    const results = await getAllCharacters(this.props.page);
    // console.log('fetch results', results);
    this.props.onReceivingAllCharacters(results);
    const name = await randomizeNames();
    // console.log('name', name);
    this.props.getUserName(name);
  }

  render = () => {
    return (
      <main>
        <Route exact path='/' component={Monitor}></Route>
        <Route path='/main' component={AllCharacters}></Route>
      </main>
    )
  }
}

export const mapStateToProps = ({ page, userName }) => ({
  // allCharacters,
  // currentCharacter,
  page,
  userName
});

export const mapDispatchToProps = dispatch => ({
  onReceivingAllCharacters: results => dispatch(sendAllCharacters(results)),
  getUserName: name => dispatch(userName(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);