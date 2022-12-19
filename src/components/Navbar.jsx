import React from "react";

function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "noactive");
  return (
    <>
      <div className="pizzaheader">
        <div className="nav-container">
          <h5>🍕Pizzeria Mamma Mia</h5>
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
