import './AllCharacters.css';
import { applyFilter } from '../../actions';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class AllCharacters extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    };
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

  searchCharacters = () => {
    let searched = this.props.allCharacters.filter(character =>
      character.name.toLowerCase().includes(this.state.searchTerm)
    );
    return searched.map(search => {
      return <Card character={search} key={search.id} />;
    });
  };

  handleChange = e => {
    const search = e.target.value.toLowerCase();
    this.setState({ searchTerm: search });
  };

  handleClick = e => {
    const filter = e.target.id;
    this.props.onfilterChoice(filter);
    this.setState({ searchTerm: '' });
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
            <form>
              Search:
              <input
                className='search_field'
                type='text'
                value={this.state.searchTerm}
                onChange={this.handleChange}
              />
            </form>
          </div>
        </header>
        {this.props.filter === 'all' && this.state.searchTerm && (
          <section className='allCharacters'>{this.searchCharacters()}</section>
        )}
        {this.props.filter === 'all' && !this.state.searchTerm && (
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

AllCharacters.propTypes = {
  allCharacters: PropTypes.array,
  filter: PropTypes.string,
  onfilterChoice: PropTypes.func
};
