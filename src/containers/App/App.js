import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCharacters } from '../../apiCalls/apiCalls';
import { sendAllCharacters, userName } from '../../actions';
import { Route } from 'react-router-dom';
import AllCharacters from '../AllCharacters/AllCharacters';
import Monitor from '../Monitor/Monitor';
import { randomizeNames } from '../../randomNames';
import SingleFocus from '../SingleFocus/SingleFocus';
import './App.css';

export class App extends Component {

  componentDidMount = async () => {
    const name = await randomizeNames();
    this.props.getUserName(name);
  }

  componentDidUpdate = async () => {
    if (!this.props.allCharacters.length) {
      for (let i = 1; i < 10; i++) {
        const results = await getAllCharacters(i);
        await this.props.onReceivingAllCharacters(results);
      }
    }
  }

  render = () => {
    return (
      <main>
        <Route exact path='/' component={Monitor}></Route>
        <Route exact path='/criminals' component={AllCharacters}></Route>
        <Route path={`/criminals/${this.props.currentCharacter.name}`} component={SingleFocus}></Route>
      </main>
    )
  }
}

export const mapStateToProps = ({ userName, currentCharacter, allCharacters }) => ({
  userName,
  currentCharacter,
  allCharacters
});

export const mapDispatchToProps = dispatch => ({
  onReceivingAllCharacters: results => dispatch(sendAllCharacters(results)),
  getUserName: name => dispatch(userName(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);