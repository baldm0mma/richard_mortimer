import * as actions from './index';

describe('Actions', () => {

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
    const id = 1;
    const name = 'Mr. Poopybutthole';
    const expectedAction = {
      type: 'SEND_SINGLE_CHARACTER',
      id,
      name
    }
    const result = actions.focusSingleCharacter(id, name);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of "USER_NAME" and have a payload of the users random name', () => {
    const name = 'Spanky Spankpants';
    const expectedAction = {
      type: 'USER_NAME',
      name
    }
    const result = actions.userName(name);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of "APPLY_FILTER" and have a payload of the chosen filter', () => {
    const filter = 'dead';
    const expectedAction = {
      type: 'APPLY_FILTER',
      filter
    }
    const result = actions.applyFilter(filter);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of "THROW_ERROR" and have a payload of the thrown error', () => {
    const error = 'Cannot even deal with you right now...';
    const expectedAction = {
      type: 'THROW_ERROR',
      error
    }
    const result = actions.throwError(error);
    expect(result).toEqual(expectedAction);
  });

});
