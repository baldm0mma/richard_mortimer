import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendSingleCharacter } from '../actions';

export class AllCharacters extends Component {

  iterateCaracters = () => {
    const { allCharacters } = this.props;
    return allCharacters.map(character => {
      return <p>{character.id}</p>
    });
  }

  render = () => {
    return <section>{this.iterateCaracters()}</section>;
  };
}

export const mapStateToProps = ({ allCharacters }) => ({
  allCharacters
});

export const mapDispatchToProps = dispatch => ({
  onCharacterChoice: id => dispatch(sendSingleCharacter(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AllCharacters);