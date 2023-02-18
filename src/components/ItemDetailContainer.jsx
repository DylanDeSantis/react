import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import Data from "../data.json"
import { useParams } from "react-router"

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [rodados, setRodados] = useState([])
  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (Data.length === 0) {
        reject(new Error("No hay datos para mostrar"))
      }
      setTimeout(() => {
        const filtroRodado = Data.filter((rodado) => rodado.id == id)
        resolve(filtroRodado)
      }, 2000)
    })
  }

  async function fetchingData() {
    try {
      const datosFetched = await getDatos()
      setRodados(datosFetched)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchingData()
  }, [])
    return(
      <ItemDetail rodados={rodados[0]} /> 
    )
}

export default ItemDetailContainer