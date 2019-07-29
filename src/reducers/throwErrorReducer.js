export const throwErrorReducer = (state = '', action) => {
  const { type } = action;
  switch (type) {
    case 'THROW_ERROR':
      return action.error;
    default:
      return state;
  }
};
