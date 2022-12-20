import React, {useContext } from "react";
import Title from "./Title";
import ItemList from "./ItemList";
import { PizzaContext } from "../context/PizzaContext"

export const ItemListContainer = ({ texto, }) => {
  const { pizzas } = useContext(PizzaContext);


  return (
    <>
      <Title greeting={texto} />
      
      <ItemList pizzas={pizzas} />
    </>
  );
};

export default ItemListContainer;
