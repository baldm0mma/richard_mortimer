import React from 'react';
import { Card } from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  let wrapper;
  let character = { name: 'Mr. Poopybutthole', image: 'http://www.hi.com' };
  
  beforeEach(() => {
    wrapper = shallow(<Card character={character} />);
  });

  it('renders the name of the character wrapped in an <h2> element', () => {
    const name = <h2>Mr. Poopybutthole</h2>;
    expect(wrapper.contains(name)).toEqual(true);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
