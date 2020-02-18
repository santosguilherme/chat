import { toArray } from './toArray';

describe('toArray', () => {
  test.each([
    [undefined, []],
    [{}, []],
    [{ a: { b: false } }, [{ b: false }]],
    [{ a: { b: false }, c: 'any value' }, [{ b: false }, 'any value']],
    [{ a: true }, [true]],
    [{ a: 1, b: '2' }, [1, '2']],
  ])('when the path is %s and the obj %o should returns %s', (obj, result) => {
    expect(toArray(obj)).toEqual(result);
  });
});
