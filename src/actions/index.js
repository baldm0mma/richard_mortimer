export const sendAllCharacters = allCharacters => ({
  type: 'SEND_ALL_CHARACTERS',
  allCharacters
});

export const focusSingleCharacter = id => ({
  type: 'SEND_SINGLE_CHARACTER',
  id
});

export const userName = name => ({
  type: 'USER_NAME',
  name
});
