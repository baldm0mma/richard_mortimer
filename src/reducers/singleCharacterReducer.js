export const singleCharacterReducer = (state = {}, action) => {
  const { type } = action;
  switch (type) {
    case 'SEND_SINGLE_CHARACTER':
      return { id: action.id, name: action.name };
    default:
      return state;
  }
};
