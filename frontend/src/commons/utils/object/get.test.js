import { get } from './get';

describe('get', () => {
  test.each([
    ['a', {}, undefined],
    ['', { a: 0 }, undefined],
    ['a', { a: 1 }, 1],
    ['a', { a: 1, b: 2 }, 1],
    ['a.b', { a: { b: 2 }, c: 3 }, 2],
    ['a.b', { a: { c: 2 }, d: 3 }, undefined],
  ])('when the path is %s and the obj %o should returns %s', (path, obj, result) => {
    expect(get(path, obj)).toBe(result);
  });
});
