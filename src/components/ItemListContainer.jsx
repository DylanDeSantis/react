import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import db from "../firebase.js";

const ItemListContainer = () => {
  const [producto, setProducto] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const coleccion = collection(db, "rodados");
    getDocs(coleccion).then((res) =>
      setProducto(res.docs.map((rod) => ({ id: rod.id, ...rod.data() })))
    );
  }, [categoriaId]);

  return <ItemList producto={producto} />;
};

export default ItemListContainer;
