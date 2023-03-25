import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import db from "../firebase.js";

const ItemListContainer = () => {
  const [producto, setProducto] = useState([]);
  const { categoriaId } = useParams();
  const { marca } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const coleccion = collection(db, "rodados");
    let consulta = coleccion;

    if (categoriaId) {
      consulta = query(coleccion, where("categoria", "==", categoriaId));
    }

    if (marca) {
      consulta = query(consulta, where("marca", "==", marca));
    }

    getDocs(consulta).then((res) =>
      setProducto(res.docs.map((rod) => ({ id: rod.id, ...rod.data() })))
    );
  }, [categoriaId, marca]);

  return <ItemList producto={producto} />;
};

export default ItemListContainer;
