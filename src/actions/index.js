export const sendAllCharacters = allCharacters => ({
  type: 'SEND_ALL_CHARACTERS',
  allCharacters
});

export const focusSingleCharacter = (id, name) => ({
  type: 'SEND_SINGLE_CHARACTER',
  id,
  name
});

export const userName = name => ({
  type: 'USER_NAME',
  name
});

export const applyFilter = filter => ({
  type: 'APPLY_FILTER',
  filter
});

export const throwError = error => ({
  type: 'THROW_ERROR',
  error
});