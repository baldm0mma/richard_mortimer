export const sendAllCharacters = allCharacters => ({
  type: 'SEND_ALL_CHARACTERS',
  allCharacters
});

export const sendSingleCharacter = character => ({
  type: 'SEND_SINGLE_CHARACTER',
  character
});

export const incrementPage = () => ({
  type: 'INCREMENT_PAGE'
});

export const decrementPage = () => ({
  type: 'DECREMENT_PAGE'
});

export const userName = name => ({
  type: 'USER_NAME',
  name
});
