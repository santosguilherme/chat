import { trim } from './trim';

export function isEmpty(str = '') {
  const isNumber = typeof str === 'number';

  return isNumber
    ? false
    : (!str || !trim(str).length);
}
