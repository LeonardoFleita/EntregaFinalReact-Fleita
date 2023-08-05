import { Button } from "@mui/material";

const ItemCount = ({ counter, setCounter, item, agregar, dark }) => {
  return (
    <div className="itemCountCounterContainer">
      <div className="itemCountCounter">
        <Button
          disabled={counter <= 1}
          variant="contained"
          size="small"
          color={!dark ? "primary" : "secondary"}
          className="itemCountCounterButton"
          onClick={() => {
            counter > 1 && setCounter(counter - 1);
          }}
        >
          -
        </Button>
        <h2 className="bla">{counter}</h2>
        <Button
          disabled={counter >= item.stock}
          variant="contained"
          size="small"
          color={!dark ? "primary" : "secondary"}
          className="itemCountCounterButton"
          onClick={() => {
            counter < item.stock && setCounter(counter + 1);
          }}
        >
          +
        </Button>
      </div>
      <Button
        variant="contained"
        color={!dark ? "primary" : "secondary"}
        className="itemDetailAgregarButton"
        onClick={() => agregar(counter)}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
