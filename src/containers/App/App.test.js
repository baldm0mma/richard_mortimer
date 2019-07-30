import { App, mapStateToProps, mapDispatchToProps } from './App';
import { sendAllCharacters, userName } from '../../actions';
import { shallow } from 'enzyme';
import React from 'react';

describe('App', () => {
  let wrapper;
  describe('Methods and JSX', () => {
    beforeEach(() => {
      const props = {
        userName: 'Steve',
        currentCharacter: {
          name: 'Karl',
          id: 1
        },
        allCharacters: [{ id: 2, name: 'Biff' }, { id: 3, name: 'Marge' }],
        getUserName: jest.fn(),
        onReceivingAllCharacters: jest.fn()
      };
      wrapper = shallow(<App {...props} />);
    });
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
    it('should invoke getUserName() on CDM', () => {
      wrapper.instance().componentDidMount();
      expect(wrapper.instance().props.getUserName).toHaveBeenCalled();
    });
    it('should not invoke onReceivingAllCharacters() on CDU if the fetch has already happened', () => {
      wrapper.instance().componentDidUpdate();
      expect(
        wrapper.instance().props.onReceivingAllCharacters
      ).not.toHaveBeenCalled();
    });
    it('should not invoke getAllCharacters() on CDU if the fetch has already happened', () => {
      wrapper.instance().getAllCharacters = jest.fn();
      wrapper.instance().componentDidUpdate();
      expect(
        wrapper.instance().getAllCharacters
      ).not.toHaveBeenCalled();
    });
  });

  describe('mapStateToProps', () => {
    it('should contain allCharacters, userName, and currentCharacter', () => {
      const mockState = {
        allCharacters: 'all of us!',
        userName: 'Chuck',
        currentCharacter: 'Biff'
      };
      const expected = {
        allCharacters: 'all of us!',
        userName: 'Chuck',
        currentCharacter: 'Biff'
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('mapDispatchToProps.onReceivingAllCharacters should call dispatch', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = sendAllCharacters(undefined);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.onReceivingAllCharacters();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
    it('mapDispatchToProps.getUserName should call dispatch', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = userName(undefined);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getUserName();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
