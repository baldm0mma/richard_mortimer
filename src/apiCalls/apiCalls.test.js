import { getAllCharacters } from './apiCalls';
import { allCharactersUrl } from './urls';

describe('Api calls', () => {
  beforeEach(() => {
    let mockAllCharacters = [{id: 1, name: 'Mr. Poopybutthole'}, {id: 2, name: 'Noob-Noob'}]
    let mockCharacter = {id: 1, name: 'Mr. Poopybutthole'};
    window.fetch = jest.fn().mockImplementation(() => {
      
    })
  });
  describe('getAllCharacters', () => {
    it('should be called with the correct url', () => {

    });
  });
});
