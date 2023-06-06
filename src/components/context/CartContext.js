import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  
  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map((cartItem) =>
        cartItem.id === item.id ? {...cartItem, quantity: (cartItem.quantity || 0) + 1} : cartItem
      ));
    } else {
      setCartItems([...cartItems, {...item, quantity: 1}]);
    }
  };
  

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const increaseQuantity = (item) => {
    
    const newCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id ? {...cartItem, quantity: (cartItem.quantity || 0) + 1} : cartItem
    );
    console.log('new cart items:', newCartItems);
    setCartItems(newCartItems);
  }
  
  const decreaseQuantity = (item) => {
  
    const newCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id ? {...cartItem, quantity: Math.max(1,(cartItem.quantity || 1) -1)} : cartItem
    );
    console.log('new cart items:', newCartItems);
    setCartItems(newCartItems);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart,increaseQuantity ,decreaseQuantity}}>
      {children}
    </CartContext.Provider>
  );
};
