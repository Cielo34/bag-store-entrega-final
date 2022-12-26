import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setquantity] = useState(initial);

  const minus = () => quantity > 1 && setquantity(quantity - 1);

  const plus = () => quantity < stock && setquantity(quantity + 1);

  return (
    <div className="item-count">
      <div className="qty-bar">
        <p className="minus" onClick={minus}>
          {"<"}
        </p>
        <p className="qty-num-bar">{quantity}</p>
        <p className="plus" onClick={plus}>
          {">"}
        </p>
      </div>
      <button className="btn-add" onClick={onAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
