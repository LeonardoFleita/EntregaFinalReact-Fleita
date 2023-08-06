import { Button, ThemeProvider } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, deleteById, limpiar, finalPrice, dark, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <main className={!dark ? "mainLight" : "mainDark"}>
        <article className="cartContainer">
          <table>
            <tbody>
              {cart.map((el) => {
                return (
                  <tr key={el.id} className="cartProduct">
                    <td>
                      <img src={el.image} />
                    </td>
                    <td>
                      <h2>{el.name}</h2>
                    </td>
                    <td>
                      <h3>
                        ${" "}
                        {new Intl.NumberFormat("de-DE").format(
                          el.price * el.quantity
                        )}
                      </h3>
                    </td>
                    <td>
                      <h3>{el.quantity}</h3>
                    </td>
                    <td className="cartDeleteButton">
                      <IconButton
                        onClick={() => deleteById(el.id)}
                        aria-label="delete"
                      >
                        <DeleteIcon
                          sx={dark ? { color: "white" } : { color: "grey" }}
                        />
                      </IconButton>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h2>$ {new Intl.NumberFormat("de-DE").format(finalPrice)}</h2>
          <Link to="/checkout">
            <Button
              variant="contained"
              color="success"
              size="small"
              className="cartComprarButton"
            >
              Terminar la compra
            </Button>
          </Link>
          <Button
            onClick={limpiar}
            variant="outlined"
            color={!dark ? "error" : "secondary"}
            size="small"
          >
            Limpiar Carrito
          </Button>
        </article>
      </main>
    </ThemeProvider>
  );
};

export default Cart;
