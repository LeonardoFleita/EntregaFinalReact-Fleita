import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { products } from "../../../productsMock";
import { Button } from "@mui/material";

const Dashboard = () => {
  const productsCollection = collection(db, "products");
  const agregarColeccion = () => {
    products.forEach((el) => {
      addDoc(productsCollection, el);
    });
  };

  return (
    <div>
      <Button onClick={agregarColeccion}>Agregar productos</Button>
    </div>
  );
};

export default Dashboard;
