import React from 'react';
import { shallow } from 'enzyme';
import { AllCharacters } from './AllCharacters';

describe('All Characters', () => {
  let wrapper, mockProps, allChars;
  beforeEach(() => {
    allChars = [{ id: 1, status: 'Alive' }, { id: 2, status: 'Dead' }];
    mockProps = {
      allCharacters: allChars,
      filter: 'all',
      onFilterChoice: jest.fn()
    };
    wrapper = shallow(<AllCharacters props={mockProps} />);
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
