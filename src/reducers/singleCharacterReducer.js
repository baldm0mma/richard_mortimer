export const singleCharacterReducer = (state = '', action) => {
  const { type } = action;
  switch (type) {
    case 'SEND_SINGLE_CHARACTER':
      return action.id;
    default:
      return state;
  }
};
