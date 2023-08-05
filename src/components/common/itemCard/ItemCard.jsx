import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  ThemeProvider,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const ItemCard = ({ prod }) => {
  const { dark, theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={
          !dark
            ? { maxWidth: 345 }
            : { maxWidth: 345, backgroundColor: "#5a5a5a;" }
        }
        className="tarjeta"
      >
        <Link to={`/itemDetail/${prod.id}`}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={prod.image}
              alt={prod.name}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={dark ? { color: "white" } : { color: "inherit" }}
              >
                {prod.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={dark ? { color: "white" } : { color: "inherit" }}
              >
                {prod.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>

        <CardActions>
          <Link to={`/itemDetail/${prod.id}`}>
            <Button size="small" color={!dark ? "primary" : "secondary"}>
              Detalles
            </Button>
          </Link>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
};

export default ItemCard;
