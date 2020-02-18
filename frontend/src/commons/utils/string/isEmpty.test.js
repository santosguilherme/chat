import { isEmpty } from './isEmpty';

describe('isEmpty', () => {
  test.each([
    ['', true],
    [' ', true],
    [undefined, true],
    [null, true],
    [987, false],
    ['string test', false],
    [' nubank ', false],
    [' lending', false],
    ['credit card ', false],
  ])('string %s should returns %s', (string, result) => {
    expect(isEmpty(string)).toBe(result);
  });
});
