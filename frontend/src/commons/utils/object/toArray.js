export default function toArray(object = {}) {
  return Object.keys(object).map(key => object[key]) || [];
}
