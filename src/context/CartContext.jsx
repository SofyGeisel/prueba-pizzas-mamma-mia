import React, {useState, useContext} from 'react';


const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  /*const addProduct = (pizzas, newQuantity) => {
    const newCart = cart.filter(prod => prod.id !== pizzas.id);
    newCart.push({ ...pizzas, quantity: newQuantity});
    setCart(newCart)
  }*/

  /*const addProduct = (pizzas, newQuantity) => {
    const { quantity = 0 } = cart.find(prod => prod.id === pizzas.id) || {};
    const newCart = cart.filter(prod => prod.id !== pizzas.id);
    setCart([...newCart, { ...pizzas, quantity: quantity + newQuantity }])
  }*/

  /*const addProduct = (pizzas, quantity) => {
    let newCart;
    let product = cart.find(product => product.id === pizzas.id);
    if (product) {
      product.quantity += quantity;
      newCart = [...cart];
    } else {
      product = { ...pizzas, quantity: quantity };
      newCart = [ ...cart, product];
    }
    setCart(newCart)
  }*/

  const addProduct = (pizzas, quantity) => {
    if (isInCart(pizzas.id)) {
      setCart(cart.map(product => {
        return product.id === pizzas.id ? { ...product, quantity: product.quantity + quantity } : product
      }));
    } else {
      setCart([...cart, {...pizzas, quantity}]);
    }
  }

  const clearCart = () => setCart([]);

  const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

  const removeProduct = (id) => setCart(cart.filter(product => product.id !==id));

  return (
    <CartContext.Provider value={{
      clearCart,
      isInCart,
      removeProduct,
      addProduct
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider