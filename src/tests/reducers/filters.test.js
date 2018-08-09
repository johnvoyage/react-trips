import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  });
});

test('should set text filter', () => {
  const text = 'test filter';
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  };
  const state = filtersReducer(undefined, action);

  expect(state.text).toBe(text);
});