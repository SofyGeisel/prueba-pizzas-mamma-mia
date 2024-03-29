import React, { useState} from "react";
import ItemCount from './ItemCount'
import { Link } from "react-router-dom";
import { useCartContext} from '../context/CartContext';

const ItemDetail = ({ pizzas }) => {
  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(pizzas, quantity);
  };

  return (
    <div className="detail-container">
      <div className="detail-info">
        <img className="detail-img" src={pizzas.img} alt="" />
        <div className="detail-content">
          <h1>{pizzas.name}</h1>
          {
            goToCart
            ? <Link to='/carrito'>Terminar compra</Link>
            :<ItemCount initial={1} stock={5} onAdd={onAdd} />
          }

          
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
