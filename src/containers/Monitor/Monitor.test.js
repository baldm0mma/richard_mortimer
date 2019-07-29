import React from 'react';
import { Monitor, mapStateToProps } from './Monitor';
import { shallow } from 'enzyme';

describe('Monitor', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Monitor />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should revieve props of the user name', () => {
    const mockState = {
      userName: 'Biff'
    };
    const expected = {
      userName: 'Biff'
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});
