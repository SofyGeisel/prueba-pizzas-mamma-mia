import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";


function Navbar() {
  
  return (
    <>
      <div className="pizzaheader">
        <div className="nav-container">
          <NavLink className="nav_link" to='/home'>🍕Pizzeria Mamma Mia</NavLink>
          <NavLink className="nav_link" to='/carrito'> <CartWidget />  </NavLink>
        </div>
        <div className="subnav-container">
          <h1>¡Pizzería Mamma Mia!</h1>
          <h4>¡Tenemos las mejores pizzas que podrás encontrar!</h4>
          
        </div>
      </div>
    </>
  );
}

export default Navbar;
