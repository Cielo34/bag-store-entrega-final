import { collection, getDocs } from 'firebase/firestore';
import { db } from '../db/firebase-config.js';
import data from './data.json';

let productos = [];

const productosDB = async () => {
  const productsCol = collection(db, 'productos');
  const getData = await getDocs(productsCol);
  productos = getData.docs.map((doc) => {
    console.log('doc.data()', doc.data());
    return doc.data();
  });
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
