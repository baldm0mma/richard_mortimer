import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Typist from 'react-typist';
import './SingleFocus.css';

export const SingleFocus = props => {

  const focusedCharacter = props.allCharacters.find(char => char.id === props.currentCharacter.id);

  const allAssociates = () => {
    return focusedCharacter.episode.reduce((associates, episode) => {
      props.allCharacters.forEach(character => {
        if (character.episode.includes(episode)) {
          associates.push(character);
        }
      })
      return associates;
    }, []);
  }

  const topAssociates = () => {
    return [allAssociates()[allAssociates().length - 2], allAssociates()[allAssociates().length - 3], allAssociates()[allAssociates().length - 4]];
  }

  return (
    <section className='all_specific_content'>
      <header>
        <p>Back To Database</p>
        <p>Log Out</p>
      </header>
      <Typist cursor={{ hideWhenDone: true }}>
        <aside>
          <h1>Name: {focusedCharacter.name}</h1>
          <p>Status: {focusedCharacter.status}</p>
          <p>Species: {focusedCharacter.species}</p>
          <p>Gender: {focusedCharacter.gender}</p>
          <p>Origin: {focusedCharacter.origin.name}</p>
          <p>Current Location: {focusedCharacter.location.name}</p>
        </aside>
      </Typist>
      <div>
        <section>
          <article>
            {/* <img src={} alt={`mugshot of...`}></img> */}
          </article>
        </section>
        <section>
          <h2>Known Associates</h2>
          <article>
            {/* <img src={} alt={`mugshot of...`}></img> */}
            <Typist cursor={{ hideWhenDone: true }}>
              <p>Name: {topAssociates()[0].name}</p>
              <p>Species: {topAssociates()[0].species}</p>
              <p>Status: {topAssociates()[0].status}</p>
            </Typist>
          </article>
          <article>
            {/* <img src={} alt={`mugshot of...`}></img> */}
            <Typist cursor={{ hideWhenDone: true }}>
              <p>Name: {topAssociates()[1].name}</p>
              <p>Species: {topAssociates()[1].species}</p>
              <p>Status: {topAssociates()[1].status}</p>
            </Typist>
          </article>
          <article>
            {/* <img src={} alt={`mugshot of...`}></img> */}
            <Typist cursor={{ hideWhenDone: true }}>
              <p>Name: {topAssociates()[2].name}</p>
              <p>Species: {topAssociates()[2].species}</p>
              <p>Status: {topAssociates()[2].status}</p>
            </Typist>
          </article>
        </section>
      </div>
    </section>
  )
}

export const mapStateToProps = ({allCharacters, currentCharacter, userName}) => ({
  allCharacters,
  currentCharacter,
  userName
});

export default connect(mapStateToProps, null)(SingleFocus)