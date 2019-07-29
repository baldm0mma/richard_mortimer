import React from 'react';
import { Card, mapDispatchToProps } from './Card';
import { shallow } from 'enzyme';
import { focusSingleCharacter } from '../../actions';

describe('Card', () => {
  let wrapper;
  let character = { name: 'Mr. Poopybutthole', image: 'http://www.hi.com' };
  let props = {
    onChoosingCriminal: jest.fn()
  }
  
  beforeEach(() => {
    wrapper = shallow(<Card character={character} {...props} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the name of the character wrapped in an <h2> element', () => {
    const name = <h2>Mr. Poopybutthole</h2>;
    expect(wrapper.contains(name)).toEqual(true);
  });

  it('should have a method that handles a click, and invokes onChoosingCriminal()', () => {
    wrapper.instance().handleClick();
    expect(wrapper.instance().props.onChoosingCriminal).toHaveBeenCalled();
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
