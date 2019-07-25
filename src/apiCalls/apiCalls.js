import { allCharactersUrl } from './urls';

export const getAllCharacters = async () => {
  try {
    const response = await fetch(allCharactersUrl);
    const parsed = await response.json();
    return parsed.results;
  } catch (error) {
    throw Error('Cannot fetch data at this time');
  }
}