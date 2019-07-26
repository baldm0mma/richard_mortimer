import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendSingleCharacter } from '../actions';
import { Card } from '../components/Card';

export class AllCharacters extends Component {
  iterateCaracters = () => {
    const { allCharacters } = this.props;
    return allCharacters.map(character => {
      // console.log(character);
      return <Card character={character} key={character.id} />;
    });
  };

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
