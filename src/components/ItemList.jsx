import React from 'react'
import Item from './Item'

function ItemList({pizzas = []}) {
  return (
    pizzas.map(pizza => <Item key={pizza.id} info={pizza}/>)
  )
}

export default ItemList