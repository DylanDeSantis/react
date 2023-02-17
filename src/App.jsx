import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import NavBar from "./components/NavBar"


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/Motos" element={<ItemListContainer />} />
        <Route path="/Marcas/:marca" element={<ItemListContainer />}/>
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
    

