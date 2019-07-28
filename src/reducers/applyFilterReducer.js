export const applyFilterReducer = (state = 'all', action) => {
  const { type } = action;
  switch (type) {
    case 'APPLY_FILTER':
      return action.filter;
    default:
      return state;
  }
};
