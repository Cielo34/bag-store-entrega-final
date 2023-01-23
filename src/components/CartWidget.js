import "./CartWidget.css";
import {useContext} from 'react'
import { BsCart2 } from "react-icons/bs";
import {CartContext} from './Cart/CartContext'


const CartWidget = () => {



  return (
    <>
      <div className="cart-icon">
        <BsCart2 size="3rem" />
      </div>
      
      {/* <div className="quantity">1</div> */}
    </>
  );
};

export default CartWidget;
