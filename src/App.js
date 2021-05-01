import "./App.css";
import { useState } from "react"
import TotalOrder from "./TotalOrder"
import PizzaConfigurator from "./PizzaConfigurator";

function App() {
  const [order, setOrder] = useState(null);

  const handleSubmit = (data) => {
    setOrder(data)
  }

  return (
    <div className="App">
      {order ? <TotalOrder order={order}/> : <PizzaConfigurator onSubmit={handleSubmit}/>}
    </div>
  );
}

export default App;
