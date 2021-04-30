import "./css/TotalOrder.css";

export default function TotalOrder({ order }) {
  const mapHandler = (el, i, arr) => (
    <span key={i}>
      <span>{el}</span>
      {i === arr.length - 1 ? (
        <br />
      ) : (
        <span className="TotalOrder__splitter"></span>
      )}
    </span>
  );
  const sizeCrust = [order.size + " cm", order.crust].map(mapHandler);
  const sauceCheese = [order.sauce, ...order.cheese].map(mapHandler);

  return (
    <p>
      Total order: {sizeCrust}
      {sauceCheese}
      {order.veges.map(mapHandler)}
      {order.meat.map(mapHandler)}
    </p>
  );
}
