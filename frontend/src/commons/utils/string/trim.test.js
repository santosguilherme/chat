import { trim } from './trim';

describe('trim', () => {
  test.each([
    ['', ''],
    [' ', ''],
    ['abc', 'abc'],
    ['  abc', 'abc'],
    ['abc    ', 'abc'],
    ['     abc    ', 'abc'],
    ['     abc cde', 'abc cde'],
    ['     abc  cde', 'abc  cde'],
    ['     abc cde   ', 'abc cde'],
    [undefined, ''],
    [null, ''],
    [false, false],
    [987, 987],
    [{}, {}],
    [[], []],
  ])('the value "%s" should returns "%s"', (string, result) => {
    expect(trim(string)).toStrictEqual(result);
  });
});
