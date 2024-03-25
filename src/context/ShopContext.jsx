import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  const addToCart = (cardInfo,quantityChange) => {
    // Check if the item is already in the cart
    const updatedCartItems = [...cartItems];

    const existingCartItemIndex = updatedCartItems.findIndex(
      (item) => item.id === cardInfo.id
    );
    console.log(existingCartItemIndex);
    if (existingCartItemIndex !== -1) {
      // If the item is already in the cart, update its quantity
      updatedCartItems[existingCartItemIndex] = {
        ...updatedCartItems[existingCartItemIndex],
        quantity:
          updatedCartItems[existingCartItemIndex].quantity + quantityChange,
      };
    } else {
      // If the item is not in the cart, add it with quantity 1
      updatedCartItems.push({ ...cardInfo, quantity: 1 });
    }
    setCartItems(updatedCartItems);

  };

  const removeFromCart = (itemId, quantityChange) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity - quantityChange } : item
    );

    setCartItems(updatedCartItems.filter((item) => item.quantity > 0));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
  
    setCartItems(updatedCartItems);
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart,removeFromCart,handleQuantityChange }}>
      {children}
    </CartContext.Provider>
  );
};
