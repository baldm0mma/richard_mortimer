import { allCharactersUrl } from './urls';

export const getAllCharacters = async num => {
  try {
    const response = await fetch(allCharactersUrl(num));
    const parsed = await response.json();
    return parsed.results;
  } catch (error) {
    throw Error('Cannot fetch data at this time');
  }
}