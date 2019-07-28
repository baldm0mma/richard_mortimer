import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Typist from 'react-typist';
import './SingleFocus.css';

export const SingleFocus = props => {
  const focusedCharacter = props.allCharacters.find(
    char => char.id === props.currentCharacter.id
  );

  const allAssociates = () => {
    return focusedCharacter.episode.reduce((associates, episode) => {
      props.allCharacters.forEach(character => {
        if (character.episode.includes(episode) && character.id !== focusedCharacter.id) {
          associates.push(character);
        }
      });
      return associates;
    }, []);
  };

  const topAssociates = () => {
    return [
      allAssociates()[allAssociates().length - 2],
      allAssociates()[allAssociates().length - 3],
      allAssociates()[allAssociates().length - 4]
    ];
  };

  return (
    <section className='all_specific_content'>
      <header>
        <Link className='link_back' to='/criminals'>
          <p>Back To Database</p>
        </Link>
        <p>Log Out</p>
      </header>
      <div className='styling_container'>
        <Typist className='focus_details' cursor={{ hideWhenDone: true }}>
          <aside>
            <img className='associate_img' src={focusedCharacter.image} alt={`mugshot of...`}></img>
            <h1>Name: {focusedCharacter.name}</h1>
            <p>Status: {focusedCharacter.status}</p>
            <p>Species: {focusedCharacter.species}</p>
            <p>Gender: {focusedCharacter.gender}</p>
            <p>Origin: {focusedCharacter.origin.name}</p>
            <p>Current Location: {focusedCharacter.location.name}</p>
          </aside>
        </Typist>
        <section className='associates_container'>
          <h3 className='associate_title'>Known Associates</h3>
          <div className='associates_styling'>
            <article className='associate 1'>
              <img className='associate_img' src={topAssociates()[0].image} alt={`mugshot of...`}></img>
              <Typist cursor={{ hideWhenDone: true }}>
                <p>Name: {topAssociates()[0].name}</p>
                <p>Species: {topAssociates()[0].species}</p>
                <p>Status: {topAssociates()[0].status}</p>
              </Typist>
            </article>
            <article className='associate 2'>
              <img className='associate_img' src={topAssociates()[1].image} alt={`mugshot of...`}></img>
              <Typist cursor={{ hideWhenDone: true }}>
                <p>Name: {topAssociates()[1].name}</p>
                <p>Species: {topAssociates()[1].species}</p>
                <p>Status: {topAssociates()[1].status}</p>
              </Typist>
            </article>
            <article className='associate 3'>
              <img className='associate_img' src={topAssociates()[2].image} alt={`mugshot of...`}></img>
              <Typist cursor={{ hideWhenDone: true }}>
                <p>Name: {topAssociates()[2].name}</p>
                <p>Species: {topAssociates()[2].species}</p>
                <p>Status: {topAssociates()[2].status}</p>
              </Typist>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
};

export const mapStateToProps = ({
  allCharacters,
  currentCharacter,
  userName
}) => ({
  allCharacters,
  currentCharacter,
  userName
});

export default connect(
  mapStateToProps,
  null
)(SingleFocus);
