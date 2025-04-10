import { useState } from 'react';

let cartData = [];

function useCart() {
  const [cart, setCart] = useState(cartData);

  const addToCart = (item) => {
    cartData.push(item);
    setCart([...cartData]);
  };

  const clearCart = () => {
    cartData = [];
    setCart([]);
  };

  return { cart, addToCart, clearCart };
}

export default useCart;