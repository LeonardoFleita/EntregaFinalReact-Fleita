import React, { useContext, useState } from "react";
import Checkout from "./Checkout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import CircularProgress from "@mui/material/CircularProgress";
import BuyOrder from "./BuyOrder";
import { ThemeContext } from "../../../context/ThemeContext";

const CheckoutContainer = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const { dark, theme } = useContext(ThemeContext);

  const orderColection = collection(db, "orders");

  const [loading, setLoading] = useState(false);

  const [orderId, setOrderId] = useState("");

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      telefono: "",
      email: "",
    },

    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total: totalPrice(),
        date: serverTimestamp(),
      };
      addDoc(orderColection, order).then((res) => setOrderId(res.id));
      cart.forEach((prod) => {
        updateDoc(doc(db, "products", prod.id), {
          stock: prod.stock - prod.quantity,
        });
      });
      setLoading(true);
      clearCart();
    },

    validationSchema: Yup.object({
      nombre: Yup.string().required("el nombre es requerido"),
      apellido: Yup.string().required("el apellido es requerido"),
      telefono: Yup.string()
        .required("el teléfono es requerido")
        .matches(/^[0-9]*$/, { message: "sólo debe ingresar números" }),
      email: Yup.string()
        .email("el email no es válido")
        .required("el email es requerido"),
    }),

    validateOnChange: false,
  });

  if (orderId) {
    return <BuyOrder orderId={orderId} dark={dark} />;
  } else {
    return !loading ? (
      <Checkout
        handleS={handleSubmit}
        handleC={handleChange}
        errors={errors}
        dark={dark}
        theme={theme}
      />
    ) : (
      <main className={!dark ? "mainLight" : "mainDark"}>
        <article className="buyOrderContainer">
          <CircularProgress color="warning" />
        </article>
      </main>
    );
  }
};

export default CheckoutContainer;
