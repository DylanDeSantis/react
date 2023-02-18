import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import NavBar from "./components/NavBar"
import Cart from "./components/Cart";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/Motos" element={<ItemListContainer />} />
        <Route path="/Marcas/:marca" element={<ItemListContainer />}/>
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
    

