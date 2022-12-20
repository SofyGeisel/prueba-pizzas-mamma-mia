import React from "react";
import Navbar from "./components/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/home" element={<ItemListContainer />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/pizza/:detalleId" element={<ItemDetailContainer />} />
          </Routes>          
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
