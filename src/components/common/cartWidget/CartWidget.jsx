import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { ThemeProvider } from "@emotion/react";
import { ThemeContext } from "../../../context/ThemeContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  const { theme, dark } = useContext(ThemeContext);

  let cartQuantity = totalQuantity();

  return (
    <ThemeProvider theme={theme}>
      <Badge badgeContent={cartQuantity} color={dark ? "primary" : "secondary"}>
        <ShoppingCartIcon
          color={!dark ? "primary" : "secondary"}
          fontSize="large"
        />
      </Badge>
    </ThemeProvider>
  );
};

export default CartWidget;
