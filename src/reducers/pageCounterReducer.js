export const pageCounterReducer = (state = 1, action) => {
  const { type } = action;
  switch (type) {
    case 'INCREMENT_PAGE':
      return state += 1;
    case 'DECREMENT_PAGE':
      return state += 1;
    default:
      return state;
  }
}