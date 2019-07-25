import * as actions from './index';

describe('Actions', () => {
  let mockPerameter;

  it('should have a type of "SEND_ALL_CHARACTERS" and have a payload of allCharacters', () => {
    const allCharacters = [1, 2, 3];
    const expectedAction = {
      type: 'SEND_ALL_CHARACTERS',
      allCharacters
    };
    const result = actions.sendAllCharacters(allCharacters);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of "SEND_SINGLE_CHARACTER and have a payload of character', () => {
    const character = { id: 1, name: 'Mr. Poopybutthole' };
    const expectedAction = {
      type: 'SEND_SINGLE_CHARACTER',
      character
    }
    const result = actions.sendSingleCharacter(character);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of "INCREMENT_PAGE", but no payload', () => {
    const expectedAction = {
      type: 'INCREMENT_PAGE',
    }
    const result = actions.incrementPage();
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of "DECREMENT_PAGE", but no payload', () => {
    const expectedAction = {
      type: 'DECREMENT_PAGE'
    }
    const result = actions.decrementPage();
    expect(result).toEqual(expectedAction);
  });

});
