import { userNameReducer } from './userNameReducer';

describe('userNameReducer', () => {
  it('should return the default state if undefined', () => {
    const defaultState = '';
    const action = {};
    const result = userNameReducer(undefined, action);
    expect(result).toEqual(defaultState);
  });

  it('should send the ranbdomized username to the store', () => {
    const name = 'Spanky Spankerson';
    const action = {
      type: 'USER_NAME',
      name
    };
    const result = userNameReducer(undefined, action);
    expect(result).toEqual(name);
  });
});
