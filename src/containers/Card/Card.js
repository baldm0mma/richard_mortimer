import './Card.css';
import { connect } from 'react-redux';
import { focusSingleCharacter } from '../../actions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Card extends Component {
  handleClick = () => {
    this.props.onChoosingCriminal(
      this.props.character.id,
      this.props.character.name
    );
  };

  render = () => {
    return (
      <Link
        to={`/criminals/${this.props.character.name}`}
        className='link_to_single'
      >
        <article className='allCharacter_card grow' onClick={this.handleClick}>
          <h2>{this.props.character.name}</h2>
          <img
            className={
              this.props.character.status === 'Dead'
                ? 'grid_image grey'
                : 'grid_image'
            }
            src={this.props.character.image}
            alt={`mugshot of ${this.props.character.name}`}
          />
        </article>
      </Link>
    );
  };
}

export const mapDispatchToProps = dispatch => ({
  onChoosingCriminal: (id, name) => dispatch(focusSingleCharacter(id, name))
});

export default connect(
  null,
  mapDispatchToProps
)(Card);

Card.propTypes = {
  onChoosingCriminal: PropTypes.func
};
