import Item from "./Item";
import { Container } from "@chakra-ui/react";
import { useEffect } from "react";

const ItemList = ({ producto }) => {
  useEffect(() => {
    console.log(producto);
  }, [producto.length]);

  return (
    <>
      <Container>
        {producto?.map((motos) => (
          <Item
            key={motos.id}
            id={motos.id}
            imagen={motos.imagen}
            marca={motos.marca}
            modelo={motos.modelo}
            precio={motos.precio}
            descripcion={motos.descripcion}
            estado={motos.estado}
            stock={motos.stock}
            categoria={motos.categoria}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;
