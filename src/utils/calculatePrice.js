import { PRICES, PIZZA_SIZE } from "../data";

export default function calculatePrice(size, cheese, veges, meat) {
  let price = PRICES.DEFAULT;
  if (size === PIZZA_SIZE.LARGE) {
    price += PRICES.PIZZA_SIZE;
  }
  price += (cheese.length + veges.length + meat.length) * PRICES.INGREDIENT;
  return price;
}
