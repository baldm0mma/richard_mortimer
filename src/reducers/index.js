import { combineReducers } from 'redux';
import { allCharactersReducer } from './allCharactersReducer';
import { singleCharacterReducer } from './singleCharacterReducer';
import { userNameReducer } from './userNameReducer';
import { applyFilterReducer } from './applyFilterReducer';

export const rootReducer = combineReducers({
  allCharacters: allCharactersReducer,
  currentCharacter: singleCharacterReducer,
  userName: userNameReducer,
  filter: applyFilterReducer
});
