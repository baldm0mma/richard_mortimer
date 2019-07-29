import { allCharactersReducer } from './allCharactersReducer';

describe('allCharactersReducer', () => {
  it('should return the default state if no state is defined', () => {
    const defaultState = [];
    const result = allCharactersReducer(undefined, {});
    expect(result).toEqual(defaultState);
  });

  it('should send all fetched characters to state', () => {
    const allCharacters = [1, 2, 3];
    const action = {
      type: 'SEND_ALL_CHARACTERS',
      allCharacters
    };
    const expected = allCharacters;
    const result = allCharactersReducer(undefined, action);
    expect(result).toEqual(expected);
  });
});
