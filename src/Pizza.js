import React from 'react';

export default function Pizza(props) {
  if (!props) {
    return <h3>Waiting for your pizza order...</h3>;
  }
  const { name, size, toppings, instructions } = props.pizza;

  let toppingList = Object.keys(toppings);
  let chosenToppings = toppingList.filter(function (picked) {
    return toppings[picked];
  });

  return (
    <div className="pizzaResults">
      <h2>Your Pizza Order is as follows:</h2>
      <h3>Name: {name}</h3>
      <h3>Pizza Size: {size}</h3>
      <ul>
        Pizza Toppings:
        {chosenToppings.map((topping, index) => {
          return <li key={index}>{topping}</li>;
        })}
      </ul>
      <h3>Delivery Instructions (if any): {instructions}</h3>
      <h3>Thank you for your order!</h3>
    </div>
  );
}
