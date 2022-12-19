import React from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <>
      <Navbar />
      <ItemListContainer texto='Esteban' />
      </>
   
    </div>
  );
}

export default App;
