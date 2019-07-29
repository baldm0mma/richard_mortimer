import { applyFilterReducer } from './applyFilterReducer';

describe('applyFilterReducer', () => {
  it('should return the default state', () => {
    const expected = 'all';
    const result = applyFilterReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should send the chosen filter to the store', () => {
    const filter = 'dead';
    const action = {
      type: 'APPLY_FILTER',
      filter
    };
    const expected = filter;
    const result = applyFilterReducer(undefined, action);
    expect(result).toEqual(expected);
  });
});
