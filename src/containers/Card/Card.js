import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { focusSingleCharacter } from '../../actions';

export const Card = ({ character, onChoosingCriminal }) => {
  // console.log(character.name);
  const handleClick = () => {
    onChoosingCriminal(character.id, character.name);
    console.log('worked', character.name);
  };

  return (
    <Link to={`/criminals/${character.name}`} className='link_to_single'>
      <article className='allCharacter_card grow' onClick={handleClick}>
        <h2>{character.name}</h2>
        <img
          className='grid_image'
          src={character.image}
          alt={`mugshot of ${character.name}`}
        />
      </article>
    </Link>
  );
};

export const mapDispatchToProps = dispatch => ({
  onChoosingCriminal: (id, name) => dispatch(focusSingleCharacter(id, name))
});

export default connect(
  null,
  mapDispatchToProps
)(Card);
