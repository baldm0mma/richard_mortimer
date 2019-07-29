import { allChars, singleChar } from '../../mockData';
import { focusSingleCharacter } from '../../actions';
import { shallow } from 'enzyme';
import {
  SingleFocus,
  mapStateToProps,
  mapDispatchToProps
} from './SingleFocus';
import React from 'react';

describe('SingleFocus', () => {
  let wrapper;
  const props = {
    allCharacters: allChars,
    currentCharacter: singleChar,
    userName: 'Karl'
  };
  it('should match the snapshot', () => {
    wrapper = shallow(<SingleFocus {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should contain allCharacters, currentCharacter, and userName', () => {
      const mockState = {
        allCharacters: allChars,
        currentCharacter: singleChar,
        userName: 'Karl'
      };
      const expected = {
        allCharacters: allChars,
        currentCharacter: singleChar,
        userName: 'Karl'
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('mapDispatchToProps.onChoosingCriminal should call dispatch', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = focusSingleCharacter(undefined);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.onChoosingCriminal();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
