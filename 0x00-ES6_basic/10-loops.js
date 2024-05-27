export default function appendToEachArrayValue (array, appendString) {
  let idx = 0;
  for (const item of array) {
    const value = item;
    array[idx] = appendString + value;
    idx += 1;
  }

  return array;
}
