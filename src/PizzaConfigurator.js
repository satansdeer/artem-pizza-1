import { useState } from "react";
import calculatePrice from "./utils/calculatePrice";
import getUpdatedArray from "./utils/getUpdatedArray";
import Fieldset from "./Fieldset";

import {
  PIZZA_SIZE,
  PIZZA_CRUST,
  PIZZA_SAUCE,
  PIZZA_CHEESE,
  PIZZA_VEGES,
  PIZZA_MEAT,
} from "./constants";

const getCheckboxIngredientsList = (ingredientsObject, ingredientsState) => {
  return Object.entries(ingredientsObject).map(([id, title]) => ({
    id,
    title,
    checked: ingredientsState.includes(id),
  }));
}

const getRadioIngredientsList = (ingredientsObject, ingredientState) => {
  return Object.entries(ingredientsObject).map(([id, title]) => ({
    id,
    title,
    checked: ingredientState === id,
  }));
}

export default function PizzaConfigurator({ onSubmit }) {
  const [size, setSize] = useState(PIZZA_SIZE.DEFAULT);
  const [crust, setCrust] = useState(PIZZA_CRUST.THIN);
  const [sauce, setSauce] = useState(PIZZA_SAUCE.TOMATO);
  const [cheese, setCheese] = useState([PIZZA_CHEESE.MOZZARELLA]);
  const [veges, setVeges] = useState([]);
  const [meat, setMeat] = useState([]);

  const sizeList = getRadioIngredientsList(PIZZA_SIZE, size)
  const crustList = getRadioIngredientsList(PIZZA_CRUST, crust)
  const sauceList = getRadioIngredientsList(PIZZA_SAUCE, sauce)
  const cheeseList = getCheckboxIngredientsList(PIZZA_CHEESE, cheese)
  const vegesList = getCheckboxIngredientsList(PIZZA_VEGES, veges)
  const meatList = getCheckboxIngredientsList(PIZZA_MEAT, meat)

  const totalPrice = calculatePrice(size, cheese, veges, meat);

  function selectSize(event) {
    const value = Number.parseInt(event.target.value);
    setSize(value);
  }

  function selectCrust(event) {
    setCrust(event.target.value);
  }

  function selectSauce(event) {
    setSauce(event.target.value);
  }

  function selectCheese(event) {
    setCheese(getUpdatedArray(cheese, event.target.value));
  }

  function selectVeges(event) {
    setVeges(getUpdatedArray(veges, event.target.value));
  }

  function selectMeat(event) {
    setMeat(getUpdatedArray(meat, event.target.value));
  }

  function resetConfigurator() {
    setSize(PIZZA_SIZE.DEFAULT);
    setCrust(PIZZA_CRUST.THIN);
    setSauce(PIZZA_SAUCE.TOMATO);
    setCheese([PIZZA_CHEESE.MOZZARELLA]);
    setVeges([]);
    setMeat([]);
  }

  function showOrder(evt) {
    evt.preventDefault();
    const order = {
      size,
      crust,
      sauce,
      cheese,
      veges,
      meat,
      totalPrice,
    };
    onSubmit(order);
    resetConfigurator();
  }

  return (
    <>
      <form className="pizza-configurator" onSubmit={showOrder}>
        <div className="configurator-wrapper">
          <Fieldset
            title="Size"
            name="size"
            type="radio"
            handlerChange={selectSize}
            list={sizeList}
          />
          <Fieldset
            title="Crust"
            name="crust"
            type="radio"
            handlerChange={selectCrust}
            list={crustList}
          />
        </div>
        <Fieldset
          title="Choose sauce"
          name="sauce"
          type="radio"
          handlerChange={selectSauce}
          list={sauceList}
        />

        <Fieldset
          title="Choose cheese"
          name="cheese"
          handlerChange={selectCheese}
          list={cheeseList}
        />

        <Fieldset
          title="Choose veges"
          name="veges"
          handlerChange={selectVeges}
          list={vegesList}
        />

        <Fieldset
          title="Choose meat"
          name="meat"
          handlerChange={selectMeat}
          list={meatList}
        />

        <button type="submit">Make order {totalPrice}</button>
      </form>
    </>
  );
}
