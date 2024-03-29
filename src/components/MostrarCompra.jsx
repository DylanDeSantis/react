import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Text, Flex, Button } from "@chakra-ui/react";
import { CartContext } from "../context/ShoppingCartContext";

const MostrarCompra = () => {
  const { idOrden } = useContext(CartContext);

  return (
    <>
      <Flex justify="center" direction="column" alignItems="center" m="5">
        <Text fontSize="xx-large" m="3">
          Gracias por relizar su compra
        </Text>
        <Text fontSize="x-large" m="3">
          Su pedido se realizo con éxito
        </Text>
        <br />
        <br />
        <Link to={`/`}>
          <Button colorScheme="teal" size="md" mx="2">
            Volver al inicio
          </Button>
        </Link>
      </Flex>
    </>
  );
};

export default MostrarCompra;
