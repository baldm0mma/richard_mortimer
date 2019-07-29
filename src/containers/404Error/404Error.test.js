import { Error } from './404Error';
import { shallow } from 'enzyme';
import React from 'react';

describe('404 Error', () => {
  it('should render the 404 Error Component if the user attempts to navigate to a page that does not exsist', () => {
    const wrapper = shallow(<Error />);
    expect(wrapper).toMatchSnapshot();
  });
});