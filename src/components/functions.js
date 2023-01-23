import { collection, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../db/firebase-config.js";

let productos = [];

const productosDB = async () => {
  const productsCol = collection(db, "productos");
  const getData = await getDocs(productsCol);
  productos = getData.docs.map((doc) =>  ({ ...doc.data(), id: doc.id }))
};

export const getProducts = async (categoryId) => {
  await productosDB();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        categoryId
          ? productos.filter((product) => product.category === categoryId)
          : productos
      );
    }, 500);
  });
};

export const getProductById = async (productId) => {
  await productosDB();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find((product) => product.id === productId));
    }, 500);
  });
};


export const deleteProduct = async (productId) => {
  await productosDB();
  const productsCol = collection(db, "productos");
  await deleteDoc(productsCol);
  const getData = await getDocs(productsCol);
  productos = getData.docs.map((doc) =>  ({ ...doc.data(), id: doc.id }))

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter((product) => product.id === productId));
    }, 500);
  });

}
