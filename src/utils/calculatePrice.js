const DEFAULT_PRICE = 200;
const PIZZA_SIZE_PRICE = 50;
const INGREDIENT_PRICE = 29;

export default function calculatePrice({ size, cheese, veges, meat }) {
  let price = DEFAULT_PRICE;
  if (size === 35) {
    price += PIZZA_SIZE_PRICE;
  }
  cheese.forEach(() => {
    price += INGREDIENT_PRICE;
  });
  veges.forEach(() => {
    price += INGREDIENT_PRICE;
  });
  meat.forEach(() => {
    price += INGREDIENT_PRICE;
  });
  return price;
}
