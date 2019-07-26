import { getAllCharacters } from './apiCalls';

describe('Api calls', () => {
  let url = 'https://rickandmortyapi.com/api/character/?page=undefined';
  let mockAllCharacters = [
    { id: 1, name: 'Mr. Poopybutthole' },
    { id: 2, name: 'Noob-Noob' }
  ];
  // let mockCharacter = { id: 1, name: 'Mr. Poopybutthole' };
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockAllCharacters)
      });
    });
  });
  describe('getAllCharacters', () => {
    it('should be called with the correct url', () => {
      getAllCharacters();
      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it('should return a parsed result', async () => {
      const result = await getAllCharacters();
      expect(result).toEqual(mockAllCharacters);
    });
  });
});
