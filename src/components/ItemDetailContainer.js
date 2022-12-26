import "./ItemDetailContainer.css";
import { CircularProgress, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "./functions";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then((product) => setProduct(product))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      <div className="detail-container">
        {loading ? (
          <CircularProgress isIndeterminate color="green.300" />
        ) : product ? (
          <ItemDetail key={product.id} product={product} />
        ) : (
          <Text fontSize="2xl">Producto no encontrado</Text>
        )}
      </div>
    </>
  );
};

export default ItemDetailContainer;
