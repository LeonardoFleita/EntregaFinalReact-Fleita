import ItemCard from "../../common/itemCard/ItemCard";
import SkeletonCard from "../../common/itemCard/SkeletonCard";

const ItemList = ({ productos, dark }) => {
  let arr = [1, 2, 3, 4, 5, 6];

  return (
    <section>
      {productos.length > 0
        ? productos.map((prod) => <ItemCard key={prod.id} prod={prod} />)
        : arr.map((el) => <SkeletonCard key={el} dark={dark} />)}
    </section>
  );
};

export default ItemList;
