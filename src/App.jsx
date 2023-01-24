import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App({prueba}) {
  const auth = false;
  const age = 11;
  const categorias = ["electro","hogar","tecno"  ] 
  
  
  
  const sumar = () => {
    const numero = 5;
    if (numero > 5){
      console.log("es mayor a 5");
    } else {
      console.log("es menos a 5");
    }
  };
  sumar ();

    
  return (
    <> 
      <ItemListContainer />
      <NavBar prueb={prueba} nombre = {"no entiendo nada de react"}/>
      <div>Trabajo nuevo de react</div>
      {age >= 18 ? "eres mayor de edad" : "eres menor de edad"}
      {auth ? <h3>bienvenido</h3> : <h3>acceso denegado </h3>}
      <ul>
        {categorias.map((category, index) => (
            <li key={index}>{category}</li>
          )
        )}

      </ul>





    </>
  )
}
export default App



    

