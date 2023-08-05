import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({ item, agregar, cantidadPrevia = 1, dark }) => {
  const [counter, setCounter] = useState(cantidadPrevia);

  return (
    <div>
      <ItemCount
        counter={counter}
        setCounter={setCounter}
        item={item}
        agregar={agregar}
        dark={dark}
      />
    </div>
  );
};

export default ItemCountContainer;
