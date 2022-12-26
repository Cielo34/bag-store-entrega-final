import "./CartWidget.css";
import { BsCart2 } from "react-icons/bs";

const CartWidget = () => {
  return (
    <>
      <div className="cart-icon">
        <BsCart2 size="3rem" />
      </div>
      <div className="quantity">1</div>
    </>
  );
};

export default CartWidget;
