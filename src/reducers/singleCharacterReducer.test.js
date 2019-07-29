import { singleCharacterReducer } from './singleCharacterReducer';

describe('singleCharacterReducer', () => {
  it('should return the default state if none is defined', () => {
    const expected = {};
    const action = {};
    const result = singleCharacterReducer(undefined, action);
    expect(result).toEqual(expected);
  });

  it('should send a single character to the store', () => {
    const id = 1;
    const name = 'Mr. PoopButthole';
    const action = {
      type: 'SEND_SINGLE_CHARACTER',
      id,
      name
    };
    const expected = { id, name };
    const result = singleCharacterReducer(undefined, action);
    expect(result).toEqual(expected);
  });
});
