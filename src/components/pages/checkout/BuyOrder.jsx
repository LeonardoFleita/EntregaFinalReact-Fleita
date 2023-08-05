import React from "react";

const BuyOrder = ({ orderId, dark }) => {
  return (
    <main className={!dark ? "mainLight" : "mainDark"}>
      <article className="buyOrderContainer">
        <h1>¡Muchas gracias por su compra!</h1>
        <h4 style={{ marginTop: "1rem" }}>Su código de compra es: {orderId}</h4>
        <p style={{ marginTop: "1rem" }}>
          Recibirá un email con toda la información sobre su pedido
        </p>
      </article>
    </main>
  );
};

export default BuyOrder;
