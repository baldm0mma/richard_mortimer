import { allCharactersUrl } from './urls';

export const getAllCharacters = async num => {
  try {
    console.log('num', num);
    const response = await fetch(allCharactersUrl(num));
    const parsed = await response.json();
    return parsed.results;
  } catch (error) {
    throw Error('Cannot fetch data at this time');
  }
}