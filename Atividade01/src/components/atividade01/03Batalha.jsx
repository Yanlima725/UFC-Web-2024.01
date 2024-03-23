import { Children, cloneElement } from "react";

function Hero({ name, img }) {
  return (
    <div>
      <h2>Hero</h2>
      <h3>Nome: {name}</h3>
      <img src={img} alt={name} />
    </div>
  );
}

function Enemy({ name, img }) {
  return (
    <div>
      <h2>Enemy</h2>
      <h3>Nome: {name}</h3>
      <img src={img} alt={name} />
    </div>
  );
}

function Arena({ children, name, arena }) {
  return (
    <div>
      <h1>Arena: {arena}</h1>
      {Children.map(children, (child) => {
        return cloneElement(child, { Arena: name });
      })}
    </div>
  );
}

function World(props) {
  return <div>{props.children}</div>;
}

export { Hero, Enemy, Arena, World };
