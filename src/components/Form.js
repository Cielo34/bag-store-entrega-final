import React from "react";
import {useState} from 'react'
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../db/firebase-config.js";

export const Form = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputImage, setInputImage] = useState("");

  const createProduct = (e) => {
    e.preventDefault();
    const product = {
        title: inputTitle,
        price: inputPrice,
        category: inputCategory,
        description: inputDescription,
        image: inputImage
    }

    const productsCol = collection(db, "productos");
    addDoc(productsCol, product).then(({id})=>{
        console.log("Documento agregado con Id:", id)
    })

    setInputTitle("");
    setInputPrice("");
    setInputCategory("");
    setInputDescription("");
    setInputImage("");

  };

  return (
    <form onSubmit={createProduct}>
      <input
        typte="text"
        placeholder="titulo"
        onChange={(e) => setInputTitle(e.target.value)}
        value={inputTitle}
      />

      <input
        typte="text"
        placeholder="description"
        onChange={(e) => setInputDescription(e.target.value)}
        value={inputDescription}
      />

      <input
        typte="text"
        placeholder="price"
        onChange={(e) => setInputPrice(e.target.value)}
        value={inputPrice}
      />

      <input
        typte="text"
        placeholder="titulo"
        onChange={(e) => setInputCategory(e.target.value)}
        value={inputCategory}
      />

      <input
        typte="text"
        placeholder="image"
        onChange={(e) => setInputImage(e.target.value)}
        value={inputImage}
      />

        <button type="submit" >Crear Producto</button>

    </form>
  );
};
