import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import MostrarCompra from "./components/MostrarCompra";
import Cart from "./components/Cart";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar />
        <Welcome />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Marcas/:marca" element={<ItemListContainer />} />
          <Route
            path="/Categorias/:categoriaId"
            element={<ItemListContainer />}
          />
          <Route path="/item/:categoriaId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/MostrarCompra" element={<MostrarCompra />} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
