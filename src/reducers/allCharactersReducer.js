export const allCharactersReducer = (state = [], action) => {
  const { type } = action;
  switch (type) {
    case 'SEND_ALL_CHARACTERS':
      return [...state, ...action.allCharacters];
    default:
      return state;
  }
}