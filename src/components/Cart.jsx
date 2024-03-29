import React from 'react'
import { useCartContext } from '../context/CartContext'
import { Link } from "react-router-dom";
import ItemCart from './ItemCart';

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
      <p>No hay elementos en el carrito</p>
      <Link to='/'>Hacer compras</Link>
      </>
    )
  }

  return (
    <>
    {
        cart.map(product => <ItemCart key={product.id} product={product} />)
    }
    <h4>Total: ${totalPrice()}</h4>
    </>
  )
}

export default Cart