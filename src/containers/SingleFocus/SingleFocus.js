import './SingleFocus.css';
import { connect } from 'react-redux';
import { focusSingleCharacter } from '../../actions';
import { Link } from 'react-router-dom';
import React from 'react';

export const SingleFocus = props => {
  const focusedCharacter = props.allCharacters.find(
    char => char.id === props.currentCharacter.id
  );

  const allAssociates = () => {
    return focusedCharacter.episode.reduce((associates, episode) => {
      props.allCharacters.forEach(character => {
        if (
          character.episode.includes(episode) &&
          character.id !== focusedCharacter.id
        ) {
          associates.push(character);
        }
      });
      return associates;
    }, []);
  };

  const topAssociates = () => {
    return [
      allAssociates()[allAssociates().length - 1],
      allAssociates()[allAssociates().length - 2],
      allAssociates()[allAssociates().length - 3]
    ];
  };

  const handleClick = (id, name) => {
    props.onChoosingCriminal(id, name);
  };

  return (
    <section className='all_specific_content'>
      <header>
        <Link className='link_back' to='/criminals'>
          <p className='button grow'>Back To Database</p>
        </Link>
        <a href='https://www.youtube.com/watch?v=dIdk61KN1to'>
          <p className='button grow'>Log Out</p>
        </a>
      </header>
      <div className='styling_container'>
        <aside className='focus_details'>
          <img
            className={
              focusedCharacter.status === 'Dead'
                ? 'associate_img grey'
                : 'associate_img'
            }
            src={focusedCharacter.image}
            alt={`mugshot of ${focusedCharacter.name}`}
          />
          <h1>Name: {focusedCharacter.name}</h1>
          <p>Status: {focusedCharacter.status}</p>
          <p>Species: {focusedCharacter.species}</p>
          <p>Gender: {focusedCharacter.gender}</p>
          <p>Origin: {focusedCharacter.origin.name}</p>
          <p>Current Location: {focusedCharacter.location.name}</p>
          <a
            className='outer-database'
            target='_blank'
            rel='noopener noreferrer'
            href={`http://www.google.com/search?q=rick+and+morty+${
              focusedCharacter.name
            }`}
          >
            Outer-database Information...
          </a>
        </aside>
        <section className='associates_container'>
          <h3 className='associate_title'>Known Associates</h3>
          <div className='associates_styling'>
            <Link
              to={`/criminals/${topAssociates()[0].name}`}
              className='associate grow 1'
            >
              <article
                onClick={() =>
                  handleClick(topAssociates()[0].id, topAssociates()[0].name)
                }
              >
                <img
                  className='associate_img'
                  src={topAssociates()[0].image}
                  alt={`mugshot of ${topAssociates()[0].name}`}
                />
                <p>Name: {topAssociates()[0].name}</p>
                <p>Species: {topAssociates()[0].species}</p>
                <p>Status: {topAssociates()[0].status}</p>
                <p>Origin: {topAssociates()[0].origin.name}</p>
                <p>Current Location: {topAssociates()[0].location.name}</p>
              </article>
            </Link>
            <Link
              to={`/criminals/${topAssociates()[1].name}`}
              className='associate grow 2'
            >
              <article
                onClick={() =>
                  handleClick(topAssociates()[1].id, topAssociates()[1].name)
                }
              >
                <img
                  className='associate_img'
                  src={topAssociates()[1].image}
                  alt={`mugshot of ${topAssociates()[1].name}`}
                />
                <p>Name: {topAssociates()[1].name}</p>
                <p>Species: {topAssociates()[1].species}</p>
                <p>Status: {topAssociates()[1].status}</p>
                <p>Origin: {topAssociates()[1].origin.name}</p>
                <p>Current Location: {topAssociates()[1].location.name}</p>
              </article>
            </Link>
            <Link
              to={`/criminals/${topAssociates()[2].name}`}
              className='associate grow 3'
            >
              <article
                onClick={() =>
                  handleClick(topAssociates()[2].id, topAssociates()[2].name)
                }
              >
                <img
                  className='associate_img'
                  src={topAssociates()[2].image}
                  alt={`mugshot of ${topAssociates()[2].name}`}
                />
                <p>Name: {topAssociates()[2].name}</p>
                <p>Species: {topAssociates()[2].species}</p>
                <p>Status: {topAssociates()[2].status}</p>
                <p>Origin: {topAssociates()[2].origin.name}</p>
                <p>Current Location: {topAssociates()[2].location.name}</p>
              </article>
            </Link>
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

export const mapDispatchToProps = dispatch => ({
  onChoosingCriminal: (id, name) => dispatch(focusSingleCharacter(id, name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleFocus);
