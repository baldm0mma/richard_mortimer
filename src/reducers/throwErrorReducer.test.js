import { throwErrorReducer } from './throwErrorReducer';

describe('throwErrorReducer', () => {
  it('should return the default state if no state is defined', () => {
    const defaultState = '';
    const result = throwErrorReducer(undefined, {});
    expect(result).toEqual(defaultState);
  });

  it('should send thrown error to state', () => {
    const error = 'Cannot even deal with you right now...';
    const action = {
      type: 'THROW_ERROR',
      error
    };
    const expected = error;
    const result = throwErrorReducer(undefined, action);
    expect(result).toEqual(expected);
  });
});
