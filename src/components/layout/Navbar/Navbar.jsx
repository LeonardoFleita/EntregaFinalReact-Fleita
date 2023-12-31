import { ThemeContext } from "../../../context/ThemeContext";
import CartWidget from "../../common/cartWidget/CartWidget";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import { Button, ThemeProvider } from "@mui/material";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const { handleClickTheme, dark, theme } = useContext(ThemeContext);
  let width = window.innerWidth;

  return (
    <nav className={!dark ? "navbarLight" : "navbarDark"}>
      <ThemeProvider theme={theme}>
        {width > 1000 ? (
          <>
            <div>
              <Link to="/" className="logo">
                <PedalBikeIcon
                  color={!dark ? "primary" : "secondary"}
                  fontSize="large"
                />
                <h2>Ciclo store</h2>
              </Link>
            </div>
            <ul className="categories">
              <Link to="/" className="navLink">
                Todas
              </Link>
              <Link to="/category/ruta" className="navLink">
                Ruteras
              </Link>
              <Link to="/category/playa" className="navLink">
                Playeras
              </Link>
              <Link to="/category/paseo" className="navLink">
                Paseo
              </Link>
              <Link to="/category/mountain" className="navLink">
                Montaña
              </Link>
            </ul>
          </>
        ) : (
          <>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <MobileNavbar dark={dark} />
              <Link to="/" className="logo" style={{ marginLeft: "1rem" }}>
                <h2>Ciclo store</h2>
              </Link>
            </div>
          </>
        )}

        <div className="carrito">
          <Button
            title={dark ? "modo claro" : "modo oscuro"}
            onClick={handleClickTheme}
            color={!dark ? "primary" : "secondary"}
            sx={width > 500 ? { marginRight: "1rem" } : { marginRight: "0" }}
          >
            {dark ? <Brightness5Icon /> : <Brightness4Icon />}
          </Button>
          <Link to="/cart">
            <CartWidget />
          </Link>
        </div>
      </ThemeProvider>
    </nav>
  );
};

export default Navbar;
