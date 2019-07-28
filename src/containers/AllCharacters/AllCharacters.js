import React from 'react';
import { connect } from 'react-redux';
import { applyFilter } from '../../actions';
import Card from '../Card/Card';
import './AllCharacters.css';

export const AllCharacters = ({ allCharacters, filter, onfilterChoice }) => {
  const iterateCaracters = () => {
    // console.log(onfilterChoice)
    return allCharacters.map(character => {
      return <Card character={character} key={character.id} />;
    });
  };

  const aliveCharacters = () => {
    let alive = allCharacters.filter(character => character.status === 'Alive');
    return alive.map(life => {
      return <Card character={life} key={life.id} />;
    });
  };

  const deadCharacters = () => {
    let dead = allCharacters.filter(character => character.status === 'Dead');
    return dead.map(death => {
      return <Card character={death} key={death.id} />;
    });
  };

  const handleClick = e => {
    const filter = e.target.id;
    onfilterChoice(filter);
  };

  return (
    <>
      <header className='allCharacters_header'>
        <h2 className='allCriminals_title'>
          Please choose from the following wanted criminals
        </h2>
        <div className='allCriminals_filter_categories'>
          <p className='button grow' id='all' onClick={e => handleClick(e)}>
            Show all
          </p>
          <p className='button grow' id='alive' onClick={e => handleClick(e)}>
            Show living only
          </p>
          <p className='button grow' id='dead' onClick={e => handleClick(e)}>
            Show deceased only
          </p>
        </div>
      </header>
      {filter === 'all' && (
        <section className='allCharacters'>{iterateCaracters()}</section>
      )}
      {filter === 'alive' && (
        <section className='allCharacters'>{aliveCharacters()}</section>
      )}
      {filter === 'dead' && (
        <section className='allCharacters'>{deadCharacters()}</section>
      )}
    </>
  );
};

export const mapStateToProps = ({ allCharacters, filter }) => ({
  allCharacters,
  filter
});

export const mapDispatchToProps = dispatch => ({
  onfilterChoice: filter => dispatch(applyFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCharacters);
