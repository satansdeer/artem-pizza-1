export default function getUpdatedArray(array, item) {
  if (array.includes(item)) {
    return array.filter((item) => item !== item);
  } else {
    return [...array, item];
  }
}
