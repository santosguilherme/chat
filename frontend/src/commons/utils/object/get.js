// https://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key
export function get(path = '', obj = {}, separator = '.') {
  const properties = Array.isArray(path) ? path : path.split(separator);

  return properties.reduce((prev, curr) => prev && prev[curr], obj);
}
