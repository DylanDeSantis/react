import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import db from "../firebase.js";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { categoriaId } = useParams();

  useEffect(() => {
    getProduct(db);
  }, [categoriaId]);

  const getProduct = async (db) => {
    const docRef = doc(db, "rodados", categoriaId);
    console.log(docRef);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("document data: ", docSnap.data());
      let producto = docSnap.data();
      producto.id = docSnap.id;
      setProducto(producto);
    }
  };
  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
