import React, { useState, createContext, useEffect } from "react";
export const PizzaContext = createContext();


const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./pizzas.json");
        const data = await response.json();
        setPizzas(data);     
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);
  



  return (
    <PizzaContext.Provider value={{ pizzas, setPizzas }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;