import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import NavBar from "./components/NavBar"


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/Motos" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
    

