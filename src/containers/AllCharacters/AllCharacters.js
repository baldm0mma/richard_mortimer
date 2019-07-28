import React from 'react';
import { connect } from 'react-redux';
import { focusSingleCharacter } from '../../actions';
import Card from '../Card/Card';
import Typist from 'react-typist';
import './AllCharacters.css';

export const AllCharacters = ({ allCharacters }) => {
  const iterateCaracters = () => {
    return allCharacters.map(character => {
      return (
        <Card character={character} key={character.id} />
      );
    });
  };

  return (
    <>
    <Typist>
      <h2 className='allCriminals_title'>Please choose from the following wanted criminals</h2>
    </Typist>
    <section className='allCharacters'>{iterateCaracters()}</section>
    </>
  );
};

export const mapStateToProps = ({ allCharacters }) => ({
  allCharacters
});

export const mapDispatchToProps = dispatch => ({
  onCharacterChoice: id => dispatch(focusSingleCharacter(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCharacters);
