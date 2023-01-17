import './App.css';
import { Routes, Route } from 'react-router-dom';

import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './db/firebase-config.js';

function App() {
  return (
    <div className="appContainer">
      <header className="header">
        <NavBar />
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
