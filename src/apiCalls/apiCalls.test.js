import { getAllCharacters } from './apiCalls';

describe('Api calls', () => {
  let url = 'https://rickandmortyapi.com/api/character/?page=undefined';
  let mockAllCharacters = [
    { id: 1, name: 'Mr. Poopybutthole' },
    { id: 2, name: 'Noob-Noob' }
  ];
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ results: mockAllCharacters })
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

    it('should return an error if ok is false', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(getAllCharacters()).rejects.toEqual(
        Error('Cannot fetch data at this time')
      );
    });
  });
});
