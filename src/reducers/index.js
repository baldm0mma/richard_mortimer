import { combineReducers } from 'redux';
import { allCharactersReducer } from './allCharactersReducer';
import { singleCharacterReducer } from './singleCharacterReducer'

export const rootReducer = combineReducers({
  allCharacters: allCharactersReducer,
  currentCharacter: singleCharacterReducer,
  password: 'wldd'
})