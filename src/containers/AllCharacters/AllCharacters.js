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
    <Typist avgTypingDelay={20}>
      <div className='allCharacters_styling'>
        <h2 className='allCriminals_title'>Please choose from the following wanted criminals</h2>
        <p className='allCriminals_astrix'>*Greyed out criminals are deceased, and have already recieved justice</p>
      </div>
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
