import { useState, useEffect } from "react";
import calculatePrice from "./utils/calculatePrice";
import getTopping from "./utils/getTopping";
import Fieldset from "./Fieldset";
import TotalOrder from "./TotalOrder";

import {
  PIZZA_SIZE,
  PIZZA_CRUST,
  PIZZA_SAUCE,
  PIZZA_CHEESE,
  PIZZA_VEGES,
  PIZZA_MEAT,
} from "./data";

export default function PizzaConfigurator() {
  const [size, setSize] = useState(PIZZA_SIZE.DEFAULT);
  const [crust, setCrust] = useState(PIZZA_CRUST.THIN);
  const [sauce, setSauce] = useState(PIZZA_SAUCE.TOMATO);
  const [cheese, setCheese] = useState([PIZZA_CHEESE.MOZZARELLA]);
  const [veges, setVeges] = useState([]);
  const [meat, setMeat] = useState([]);
  const [totalPrice, setTotalPrice] = useState(
    calculatePrice(size, cheese, veges, meat)
  );
  const [order, setOrder] = useState({});
  useEffect(() => {
    setTotalPrice(calculatePrice(size, cheese, veges, meat));
  }, [size, crust, sauce, cheese, veges, meat]);

  function selectSize(evt) {
    const value = Number.parseInt(evt.target.value);
    setSize(value);
  }

  function selectCrust(evt) {
    setCrust(evt.target.value);
  }

  function selectSauce(evt) {
    setSauce(evt.target.value);
  }

  function selectCheese(evt) {
    setCheese(getTopping(cheese, evt.target.value));
  }

  function selectVeges(evt) {
    setVeges(getTopping(veges, evt.target.value));
  }
  function selectMeat(evt) {
    setMeat(getTopping(meat, evt.target.value));
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
      size: size,
      crust: crust,
      sauce: sauce,
      cheese: cheese,
      veges: veges,
      meat: meat,
      totalPrice: totalPrice,
    };
    setOrder(order);
    resetConfigurator();
  }

  const sizeList = Object.values(PIZZA_SIZE).map((value) => ({
    value,
    title: value + " cm",
    checked: size === value,
  }));

  const crustList = Object.values(PIZZA_CRUST).map((value) => ({
    value,
    title: value,
    checked: crust === value,
  }));

  const sauceList = Object.values(PIZZA_SAUCE).map((value) => ({
    value,
    title: value.split(" ")[0],
    checked: sauce === value,
  }));

  const cheeseList = Object.values(PIZZA_CHEESE).map((value) => ({
    value,
    title: value,
    checked: cheese.includes(value),
  }));

  const vegesList = Object.values(PIZZA_VEGES).map((value) => ({
    value,
    title: value,
    checked: veges.includes(value),
  }));

  const meatList = Object.values(PIZZA_MEAT).map((value) => ({
    value,
    title: value,
    checked: meat.includes(value),
  }));

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

        <button type="submit">
          Make order {order.totalPrice ? order.totalPrice : totalPrice}
        </button>
      </form>
      {order.totalPrice ? <TotalOrder order={order} /> : null}
    </>
  );
}
