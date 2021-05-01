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
      {list.map(({checked, id, title}) => {
        return (
          <label htmlFor={id} key={id}>
            <input
              onChange={handlerChange}
              type={type}
              name={name}
              value={id}
              id={id}
              checked={checked}
            />
            {title}
          </label>
        );
      })}
    </fieldset>
  );
}
