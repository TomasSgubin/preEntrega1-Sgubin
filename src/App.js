import "./App.css";
import React from "react";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/Itemlistcontainer/ItemListContainer";
import NavBar from './components/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from "./context/CartContext";


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />}/>
        </Routes>  
        </CartProvider>
      </BrowserRouter>   
    </>
  );
}

export default App;
