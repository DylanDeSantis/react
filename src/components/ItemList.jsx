import Item from "./Item";
import { Container } from "@chakra-ui/react";

const ItemList = ({ rodados }) => {
  return (
    <>
    <Container >
      {rodados?.map((rodado) => (
        <Item
          key={rodado.id}
          id={rodado.id}
          imagen={rodado.imagen}
          marca={rodado.marca}
          modelo={rodado.modelo}
          price={rodado.price}
          description={rodado.description}
          estado={rodado.estado}
          stock={rodado.stock}
          category={rodado.category}
        />
      ))}
    </Container>
  </>
);
};

export default ItemList
