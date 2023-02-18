import ItemList from "./ItemList"
import Data from "../data.json"
import { useParams } from "react-router-dom"
import { Heading, Center, } from "@chakra-ui/react"

const ItemListContainer = () => {
  const { marca } = useParams()
  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (Data.length === 0) {
        reject(new Error("No hay datos para mostrar"))
      }
      setTimeout(() => {
        resolve(Data);
      }, 2000)
    })
  }
  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
    } catch (err) {
      console.log(err)
    }
  }
  fetchingData();
  
  const catFilter = Data.filter((rodado) => rodado.marca === marca)
  return (
    <div>
      {marca ? <ItemList rodados={catFilter} /> : <ItemList rodados={Data} />}
    </div>
  )
}

export default ItemListContainer