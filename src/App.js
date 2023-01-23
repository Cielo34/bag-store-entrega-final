import "./App.css";
import { Routes, Route } from "react-router-dom";

import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { Form } from "./components/Form";

import { CartProvider, CartContext } from "./components/Cart/CartContext";

function App() {
  return (

      <div className="appContainer">
        <header className="header">
          <NavBar />
        </header>
        <main className="main">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            {/* <Route path="/cart" element={<CartContext />} /> */}
            <Route path="create" element={<Form />}></Route>
          </Routes>
        </main>
        <footer></footer>
      </div>

  );
}

export default App;
