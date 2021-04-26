import useState from "react";
import calculatePrice from "./utils/calculatePrice";
import getTopping from "./utils/getTopping";

export default function PizzaConfigurator() {
  const [size, setSize] = useState(30);
  const [crust, setCrust] = useState("thin");
  const [sauce, setSauce] = useState("tomato");
  const [cheese, setCheese] = useState([]);
  const [veges, setVeges] = useState([]);
  const [meat, setMeat] = useState([]);
  const [orderItems, setOrderItems] = useState([]);

  const totalPrice = calculatePrice({
    size,
    cheese,
    veges,
    meat,
  });

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
    setSize(30);
    setCrust("thin");
    setSauce("tomato");
    setCheese([]);
    setVeges([]);
    setMeat([]);
  }

  function showOrder(evt) {
    evt.preventDefault();
    const order = cheese.concat(veges, meat);
    setOrderItems(order);
    resetConfigurator();
  }

  return (
    <>
      <form className="pizza-configurator" onSubmit={showOrder}>
        <div className="configurator-wrapper">
          <div className="configurator-block">
            <span>Size</span>
            <label htmlFor="size-30">
              <input
                onChange={selectSize}
                type="radio"
                name="size"
                value={30}
                checked={size === 30}
                data-testid="size-30"
                id="size-30"
              />
              30 cm
            </label>
            <label htmlFor="size-35">
              <input
                onChange={selectSize}
                type="radio"
                name="size"
                value={35}
                checked={size === 35}
                data-testid="size-35"
                id="size-35"
              />
              35 cm
            </label>
          </div>

          <div className="configurator-block">
            <span>Crust</span>
            <label htmlFor="thin-crust">
              <input
                onChange={selectCrust}
                type="radio"
                name="crust"
                value="thin"
                data-testid="thin-crust"
                checked={crust === "thin-crust"}
                id="thin-crust"
              />
              Thin
            </label>
            <label htmlFor="thick-crust">
              <input
                onChange={selectCrust}
                type="radio"
                name="crust"
                value="thick"
                data-testid="thick-crust"
                checked={crust === "thick-crust"}
                id="thick-crust"
              />
              Thick
            </label>
          </div>
        </div>

        <div className="configurator-block">
          <span>Choose sauce</span>
          <label htmlFor="tomato-sauce">
            <input
              onChange={selectSauce}
              type="radio"
              name="sauce"
              value="tomato-sauce"
              data-testid="tomato-sauce"
              checked={sauce === "tomato-sauce"}
              id="tomato-sauce"
            />
            Tomato
          </label>
          <label htmlFor="white-sauce">
            <input
              onChange={selectSauce}
              type="radio"
              name="sauce"
              value="white-sauce"
              data-testid="white-sauce"
              checked={sauce === "white-sauce"}
              id="white-sauce"
            />
            White
          </label>
          <label htmlFor="hot-sauce">
            <input
              onChange={selectSauce}
              type="radio"
              name="sauce"
              value="hot-sauce"
              data-testid="hot-sauce"
              checked={sauce === "hot-sauce"}
              id="hot-sauce"
            />
            Hot
          </label>
        </div>

        <div className="configurator-block">
          <span>Choose cheese</span>
          <label htmlFor="mozzarella-cheese">
            <input
              onChange={selectCheese}
              type="checkbox"
              name="cheese"
              value="mozzarella"
              data-testid="mozzarella-cheese"
              checked={cheese === "mozzarella-cheese"}
              id="mozzarella-cheese"
            />
            Mozzarella
          </label>
          <label htmlFor="cheddar-cheese">
            <input
              onChange={selectCheese}
              type="checkbox"
              name="cheese"
              value="cheddar"
              data-testid="cheddar-cheese"
              checked={cheese === "cheddar-cheese"}
              id="cheddar-cheese"
            />
            Cheddar
          </label>
          <label htmlFor="dorblu-cheese">
            <input
              onChange={selectCheese}
              type="checkbox"
              name="cheese"
              value="dorblu"
              data-testid="dorblu-cheese"
              checked={cheese === "dorblu-cheese"}
              id="dorblue-cheese"
            />
            Dorblue
          </label>
        </div>

        <div className="configurator-block">
          <span>Choose veges</span>
          <label htmlFor="veges-tomatoes">
            <input
              onChange={selectVeges}
              type="checkbox"
              name="veges"
              value="tomatoes"
              data-testid="veges-tomatoes"
              checked={veges === "veges-tomatoes"}
              id="veges-tomatoes"
            />
            Tomatoes
          </label>
          <label htmlFor="veges-mushrooms">
            <input
              onChange={selectVeges}
              type="checkbox"
              name="veges"
              value="mushrooms"
              data-testid="veges-mushrooms"
              checked={veges === "veges-mushrooms"}
              id="veges-mushrooms"
            />
            Mushrooms
          </label>
          <label htmlFor="veges-cupsicum">
            <input
              onChange={selectVeges}
              type="checkbox"
              name="veges"
              value="cupsicum"
              data-testid="veges-cupsicum"
              checked={veges === "veges-cupsicum"}
              id="veges-cupsicum"
            />
            Cupsicum
          </label>
        </div>

        <div className="configurator-block">
          <span>Choose meat</span>
          <label htmlFor="meat-bacon">
            <input
              onChange={selectMeat}
              type="checkbox"
              name="meat"
              value="bacon"
              data-testid="meat-bacon"
              checked={meat === "meat-bacon"}
              id="meat-bacon"
            />
            Bacon
          </label>
          <label htmlFor="meat-pepperoni">
            <input
              onChange={selectMeat}
              type="checkbox"
              name="meat"
              value="pepperoni"
              data-testid="meat-pepperoni"
              checked={meat === "meat-pepperoni"}
              id="meat-pepperoni"
            />
            Pepperoni
          </label>
          <label htmlFor="meat-ham">
            <input
              onChange={selectMeat}
              type="checkbox"
              name="meat"
              value="ham"
              data-testid="meat-ham"
              checked={meat === "meat-ham"}
              id="vmeat-ham"
            />
            Ham
          </label>
        </div>
        <button type="submit">Make order</button>
      </form>
      <p>Ingredients: {orderItems.join(", ")}</p>
      <p>Total Price: {totalPrice}</p>
    </>
  );
}