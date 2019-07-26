import { combineReducers } from 'redux';
import { allCharactersReducer } from './allCharactersReducer';
import { singleCharacterReducer } from './singleCharacterReducer'
import { pageCounterReducer } from './pageCounterReducer';
import { userNameReducer } from './userNameReducer';

export const rootReducer = combineReducers({
  allCharacters: allCharactersReducer,
  currentCharacter: singleCharacterReducer,
  page: pageCounterReducer,
  userName: userNameReducer
})