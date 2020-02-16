import { isString } from './isString';

export function trim(value = '') {
  if (value === null) {
    return '';
  }

  if (isString(value)) {
    return value.trim();
  }

  return value;
}
