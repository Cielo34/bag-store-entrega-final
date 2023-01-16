import "./ItemListContainer.css";
import { Text, CircularProgress } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "./functions";
import ItemList from "./ItemList";


 
const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  let { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts(categoryId)
      .then((products) => setProducts(products))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoryId]);


  return (
    <>
      <Text fontSize="5xl" fontWeight="bold" color="black" py="2" mb="5">
        {categoryId ? `Producto ${categoryId}` : "Todos los productos"}
      </Text>
      <div className="list-container">
        {loading ? (
          <CircularProgress isIndeterminate color="green.300" />
        ) : products.length > 0 ? (
          <ItemList products={products} />
        ) : (
          <Text fontSize="2xl">Productos no encontrados</Text>
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
