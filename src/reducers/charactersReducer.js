export const charactersReducer = (state = {}, action) => {
  const { type } = action;
  switch (type) {
    case 'SEND_ALL_CHARACTERS':
      return { allCharacters: action.allCharacters }
    case 'SEND_SINGLE_CHARACTER':
      return { currentCharacter: action.character }
    default:
      return state;
  }
}