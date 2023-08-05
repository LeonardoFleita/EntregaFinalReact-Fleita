import { Button, Skeleton, ThemeProvider } from "@mui/material";
import ItemCountContainer from "../../common/counter/ItemCountContainer";
import ItemDetailSkeleton from "./ItemDetailSkeleton";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ItemDetail = ({ item, agregar, cantidadPrevia, cart, dark, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <main className={!dark ? "mainLight" : "mainDark"}>
        <article className="cardItemDetail">
          {item.name ? (
            <div className="datosIzqItemDetail">
              <img src={item.image} />
              <h3>{item.description}</h3>
            </div>
          ) : (
            <ItemDetailSkeleton />
          )}
          <div className="datosDerItemDetail">
            {item.name ? (
              <>
                <h1>{item.name}</h1>
                <h2>${new Intl.NumberFormat("de-DE").format(item.price)}</h2>
              </>
            ) : (
              <>
                <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
                <Skeleton
                  variant="text"
                  width={80}
                  sx={{ fontSize: "1.5rem", margin: "0.3rem 0 0.5rem 0" }}
                />
              </>
            )}
            <ItemCountContainer
              item={item}
              agregar={agregar}
              cantidadPrevia={cantidadPrevia}
              dark={dark}
            />
            {cart.length > 0 && (
              <Link to="/cart" style={{ marginTop: "0.5rem" }}>
                <Button
                  variant="outlined"
                  size="small"
                  color={!dark ? "primary" : "secondary"}
                >
                  Ver Carrito
                  <ShoppingCartIcon
                    color={!dark ? "primary" : "secondary"}
                    fontSize="small"
                    sx={{ marginLeft: "0.5rem" }}
                  />
                </Button>
              </Link>
            )}
          </div>
        </article>
      </main>
    </ThemeProvider>
  );
};

export default ItemDetail;
