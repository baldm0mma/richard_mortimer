import { Monitor, mapStateToProps } from './Monitor';
import { shallow } from 'enzyme';
import React from 'react';

describe('Monitor', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Monitor />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke the login() function when render is invoked', () => {
    wrapper.instance().login = jest.fn();
    wrapper.instance().render();
    expect(wrapper.instance().login).not.toHaveBeenCalled();
  })

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
