import './App.css';
import { connect } from 'react-redux';
import { Error } from '../404Error/404Error';
import { getAllCharacters } from '../../apiCalls/apiCalls';
import { randomizeNames } from '../../randomNames';
import { Route, Switch } from 'react-router-dom';
import { sendAllCharacters, userName } from '../../actions';
import AllCharacters from '../AllCharacters/AllCharacters';
import Monitor from '../Monitor/Monitor';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SingleFocus from '../SingleFocus/SingleFocus';

export class App extends Component {
  componentDidMount = async () => {
    const name = await randomizeNames();
    this.props.getUserName(name);
  };

  componentDidUpdate = async () => {
    if (!this.props.allCharacters.length) {
      for (let i = 1; i < 26; i++) {
        const results = await getAllCharacters(i);
        await this.props.onReceivingAllCharacters(results);
      }
    }
  };

  render = () => {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Monitor} />
          <Route exact path='/criminals' component={AllCharacters} />
          <Route
            path={`/criminals/${this.props.currentCharacter.name}`}
            component={SingleFocus}
          />
          <Route component={Error} />
        </Switch>
      </main>
    );
  };
}

export const mapStateToProps = ({
  userName,
  currentCharacter,
  allCharacters
}) => ({
  userName,
  currentCharacter,
  allCharacters
});

export const mapDispatchToProps = dispatch => ({
  onReceivingAllCharacters: results => dispatch(sendAllCharacters(results)),
  getUserName: name => dispatch(userName(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

App.propTypes = {
  userName: PropTypes.string,
  currentCharacter: PropTypes.object,
  allCharacters: PropTypes.array
};

