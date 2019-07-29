import React, { Component } from 'react';
import { connect } from 'react-redux';
import { applyFilter } from '../../actions';
import Card from '../Card/Card';
import './AllCharacters.css';

export class AllCharacters extends Component {
  constructor(props) {
    super();
  }

  componentDidUpdate = () => {
    this.iterateCaracters();
  };

  iterateCaracters = () => {
    return this.props.allCharacters.map(character => {
      return <Card character={character} key={character.id} />;
    });
  };

  aliveCharacters = () => {
    let alive = this.props.allCharacters.filter(
      character => character.status === 'Alive'
    );
    return alive.map(life => {
      return <Card character={life} key={life.id} />;
    });
  };

  deadCharacters = () => {
    let dead = this.props.allCharacters.filter(
      character => character.status === 'Dead'
    );
    return dead.map(death => {
      return <Card character={death} key={death.id} />;
    });
  };

  handleClick = e => {
    const filter = e.target.id;
    this.props.onfilterChoice(filter);
  };

  render = () => {
    return (
      <>
        <header className='allCharacters_header'>
          <h2 className='allCriminals_title'>
            Please choose from the following wanted criminals
          </h2>
          <div className='allCriminals_filter_categories'>
            <p
              className='button grow'
              id='all'
              onClick={e => this.handleClick(e)}
            >
              Show all
            </p>
            <p
              className='button grow'
              id='alive'
              onClick={e => this.handleClick(e)}
            >
              Show living only
            </p>
            <p
              className='button grow'
              id='dead'
              onClick={e => this.handleClick(e)}
            >
              Show deceased only
            </p>
          </div>
        </header>
        {this.props.filter === 'all' && (
          <section className='allCharacters'>{this.iterateCaracters()}</section>
        )}
        {this.props.filter === 'alive' && (
          <section className='allCharacters'>{this.aliveCharacters()}</section>
        )}
        {this.props.filter === 'dead' && (
          <section className='allCharacters'>{this.deadCharacters()}</section>
        )}
      </>
    );
  };
}

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
