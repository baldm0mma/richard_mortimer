export const userNameReducer = (state = '', action) => {
  const { type } = action;
  switch (type) {
    case 'USER_NAME':
      return action.name;
    default:
      return state;
  }
};
