import "./App.css";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/Itemlistcontainer/ItemListContainer";
import NavBar from './components/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>   
    </>
  );
}

export default App;
