import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (producto) => {
    let existe = cart.some((el) => el.id === producto.id);
    if (existe) {
      let newArray = cart.map((el) => {
        if (el.id === producto.id) {
          return { ...el, quantity: producto.quantity };
        } else {
          return el;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, producto]);
    }
  };

  function clearCart() {
    setCart([]);
  }

  const deleteById = (id) => {
    let newArray = cart.filter((el) => el.id !== id);
    setCart(newArray);
  };

  function totalQuantity() {
    let total = cart.reduce((acc, el) => {
      return acc + el.quantity;
    }, 0);
    return total;
  }

  function totalPrice() {
    let total = cart.reduce((acc, el) => {
      return acc + el.quantity * el.price;
    }, 0);
    return total;
  }

  function getPreviousQuantity(id) {
    let elemento = cart.find((el) => el.id === id);
    return elemento?.quantity;
  }

  let data = {
    cart,
    addToCart,
    deleteById,
    clearCart,
    totalQuantity,
    totalPrice,
    getPreviousQuantity,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
