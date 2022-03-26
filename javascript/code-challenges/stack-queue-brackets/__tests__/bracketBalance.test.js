'use strict';
const validateBrackets = require('../bracketBalance');

describe('testing bracketsBalance', () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'error').mockImplementation();
  });
  afterEach[
    () => {
      consoleSpy.mockRestore();
    }
  ];

  it('testing', () => {
    expect(validateBrackets('{}')).toBeTruthy;
    expect(validateBrackets('{}(){}')).toBeTruthy;
    expect(validateBrackets('()[[Extra Characters]]')).toBeTruthy;
    expect(validateBrackets('(){}[[]]')).toBeTruthy;
    expect(validateBrackets('{}{Code}[Fellows](())')).toBeTruthy;
    expect(validateBrackets('[({}]')).toBeFalsy;
    expect(validateBrackets('(](')).toBeFalsy;
    expect(validateBrackets('{(})')).toBeFalsy;
    expect(validateBrackets('})]')).toBeFalsy;
    expect(validateBrackets('{)')).toBeFalsy;
  });
  it('testing error', () => {
    validateBrackets([1,3,4]);
    expect(consoleSpy).toHaveBeenCalledWith('expression should be a string');
  });
});
