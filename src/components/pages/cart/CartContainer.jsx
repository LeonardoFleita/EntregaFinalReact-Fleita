import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";

const CartContainer = () => {
  const { cart, deleteById, clearCart, totalPrice } = useContext(CartContext);

  const { dark, theme } = useContext(ThemeContext);

  let finalPrice = totalPrice();

  let navigate = useNavigate();

  const limpiarCarrito = () => {
    Swal.fire({
      title: "Desea limpiar el carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Limpiar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Carrito ", "", "success");
        clearCart();
      }
    });
  };

  if (!cart.length) {
    Swal.fire({
      icon: "warning",
      title: "Carrito vacío",
      text: "Será redireccionado al inicio!",
    }).then((res) => {
      navigate("/");
    });

    return (
      <main className="cartMain">
        <article className="cartContainer"></article>
      </main>
    );
  } else {
    return (
      <>
        <Cart
          cart={cart}
          deleteById={deleteById}
          limpiar={limpiarCarrito}
          finalPrice={finalPrice}
          dark={dark}
          theme={theme}
        />
      </>
    );
  }
};

export default CartContainer;
