import "./itemList.scss";
import ItemList from "./ItemList";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import { ThemeContext } from "../../../context/ThemeContext";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  let { category } = useParams();

  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    let consulta;

    let productsColection = collection(db, "products");

    if (!category) {
      consulta = productsColection;
    } else {
      consulta = query(productsColection, where("category", "==", category));
    }

    getDocs(consulta).then((res) => {
      let arrayProductos = res.docs.map((produ) => {
        return { ...produ.data(), id: produ.id };
      });
      setProductos(arrayProductos);
    });
  }, [category]);

  return (
    <main className={!dark ? "mainLight" : "mainDark"}>
      <ItemList productos={productos} dark={dark} />
    </main>
  );
};

export default ItemListContainer;
