export default function Fieldset({
  title,
  name,
  type = "checkbox",
  handlerChange,
  list,
}) {
  return (
    <fieldset className="configurator-block">
      <span>{title}</span>
      {list.map((el) => {
        let id = name + "-" + el.value;
        id = id.split(" ").join("-");
        return (
          <label htmlFor={id} key={id}>
            <input
              onChange={handlerChange}
              type={type}
              name={name}
              value={el.value}
              checked={el.checked}
              data-testid={id}
              id={id}
            />
            {el.title}
          </label>
        );
      })}
    </fieldset>
  );
}
