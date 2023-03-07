import {
  Center,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  CardFooter,
  Divider,
} from "@chakra-ui/react";
import ItemCounts from "./ItemCounts";
import { CartContext } from "../context/ShoppingCartContext";
import React, { useContext } from "react";

const ItemDetail = ({ producto }) => {
  return (
    <>
      {producto && (
        <Center p="1rem">
          <Card className="card-main">
            <CardBody>
              <Image borderRadius="lg" src={producto.imagen} />
              <Stack mt="6" spacing="3">
                <Heading size="md">{producto.marca}</Heading>
                <Text color="blue.800" fontSize="l">
                  Modelo: {producto.modelo}
                </Text>
                <Text color="blue.800" fontSize="l">
                  Precio: {producto.precio}
                </Text>
                <Text color="blue.800" fontSize="l">
                  Descripcion: {producto.decripcion}
                </Text>
                <Text color="blue.800" fontSize="l">
                  Estado: {producto.estado}
                </Text>
                <Text color="blue.800" fontSize="l">
                  Stock: {producto.stock}
                </Text>
                <Text color="blue.800" fontSize="l">
                  Categoria: {producto.categoria}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="card-footer">
              <ItemCounts
                stock={producto.stock}
                id={producto.id}
                precio={producto.precio}
                marca={producto.marca}
                categoria={producto.categoria}
                estado={producto.estado}
                modelo={producto.modelo}
                imagen={producto.imagen}
              />
            </CardFooter>
          </Card>
        </Center>
      )}
    </>
  );
};

export default ItemDetail;
