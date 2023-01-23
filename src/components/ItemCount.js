import { useContext, useEffect, useState } from "react";

const ItemCount = () => {
  const initial = 1;
  const stock = 10;
  const [count, setCount] = useState(initial);

  useEffect(() => {
    console.log("[useEffect] el componento se monto");
  }, []);


  useEffect(() => {
    console.log("[useEffect] cambio de ewstado");
  }, [count]);


  const addHandler = () => {
    console.log("suma");
    setCount(count+1);
 }

  const removeHandler = () => {
    console.log("resta");
    if (count > 1) setCount(count -1)
  }

};
