import React from 'react';
import { connect } from 'react-redux';
import { sendSingleCharacter } from '../actions';
import { Card } from '../components/Card';
import './AllCharacters.css';

export const AllCharacters = ({ allCharacters }) => {
  const iterateCaracters = () => {
    return allCharacters.map(character => {
      return (
        <Card character={character} key={character.id} id={character.id} />
      );
    });
  };

  return (
    <section className='allCharacters'>{iterateCaracters()}</section>
  );
};

export const mapStateToProps = ({ allCharacters }) => ({
  allCharacters
});

export const mapDispatchToProps = dispatch => ({
  onCharacterChoice: id => dispatch(sendSingleCharacter(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCharacters);
