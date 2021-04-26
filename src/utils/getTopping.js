export default function getTopping(array, topping) {
  if (array.includes(topping)) {
    return array.filter((item) => item !== topping);
  } else {
    return [...array, topping];
  }
}
