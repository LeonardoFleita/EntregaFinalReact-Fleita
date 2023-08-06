import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { doc, getDoc, collection } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "../../../context/ThemeContext";

const ItemDetailContainer = () => {
  let { id } = useParams();

  const { dark, theme } = useContext(ThemeContext);

  const { addToCart, getPreviousQuantity, cart } = useContext(CartContext);

  const [item, setItem] = useState({});

  const cantidadPrevia = getPreviousQuantity(id);

  useEffect(() => {
    let productsColection = collection(db, "products");
    let documento = doc(productsColection, id);
    getDoc(documento).then((res) => setItem({ ...res.data(), id: res.id }));
  }, [id]);

  const agregarAlcarrito = (cantidad) => {
    let data = {
      ...item,
      quantity: cantidad,
    };
    addToCart(data);
    let mode = dark ? "dark" : "light";
    toast.success("Producto agregado al carrito!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: mode,
    });
  };

  return (
    <>
      <ItemDetail
        item={item}
        agregar={agregarAlcarrito}
        cantidadPrevia={cantidadPrevia}
        cart={cart}
        dark={dark}
        theme={theme}
      />
      <Link to="/cart">
        <ToastContainer />
      </Link>
    </>
  );
};

export default ItemDetailContainer;
