import { isString } from './isString';

describe('isString', () => {
  test.each([
    ['', true],
    [' ', true],
    ['abc', true],
    [undefined, false],
    [null, false],
    [false, false],
    [987, false],
    [{}, false],
    [[], false],
  ])('is it "%s" a string? %s', (string, result) => {
    expect(isString(string)).toBe(result);
  });
});
