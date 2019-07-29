import React from 'react';
import { shallow } from 'enzyme';
import {
  AllCharacters,
  mapStateToProps,
  mapDispatchToProps
} from './AllCharacters';
import { applyFilter } from '../../actions';

describe('All Characters', () => {
  let wrapper, props, allChars, mockEvent;

  describe('filters and methods', () => {
    beforeEach(() => {
      mockEvent = {
        target: {
          id: 1
        }
      }
      allChars = [{ id: 1, status: 'Alive' }, { id: 2, status: 'Dead' }];
      props = {
        allCharacters: allChars,
        filter: 'all',
        onFilterChoice: jest.fn()
      };
      wrapper = shallow(<AllCharacters {...props} />);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should call iterateCaracters() on CDU', () => {
      wrapper.instance().iterateCaracters = jest.fn();
      expect(wrapper.instance().iterateCaracters).not.toHaveBeenCalled();
      wrapper.instance().componentDidUpdate();
      expect(wrapper.instance().iterateCaracters).toHaveBeenCalled();
    });

    it('should iterate through all characters', () => {
      expect(wrapper.instance().iterateCaracters().length).toEqual(2);
    });

    it('should filter through all characters and only return the characters that are alive', () => {
      expect(wrapper.instance().aliveCharacters().length).toEqual(1);
    });

    it('should filter through all characters and only return the characters that are dead', () => {
      expect(wrapper.instance().deadCharacters().length).toEqual(1);
    });

    // it('should invoke onFilterChoice() when handleClick() is invoked', () => {
    //   wrapper.props.onFilterChoice = jest.fn();
    //   expect(wrapper.props.onFilterChoice).not.toHaveBeenCalledTimes(1);
    //   wrapper.instance().handleClick(mockEvent);
    //   expect(wrapper.props.onFilterChoice).toHaveBeenCalledTimes(1);
    // });
  });

  describe('mapStateToProps', () => {
    it('should contain allCharacters and filter', () => {
      const mockState = {
        allCharacters: 'all of us!',
        filter: 'dead'
      };
      const expected = {
        allCharacters: 'all of us!',
        filter: 'dead'
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('mapDispatchToProps.onFilterChoice should call dispatch', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = applyFilter(undefined);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.onfilterChoice();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
