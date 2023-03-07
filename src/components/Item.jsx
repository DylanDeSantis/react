import {
  Center,
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Divider,
  Stack,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({
  id,
  imagen,
  marca,
  modelo,
  precio,
  descripcion,
  estado,
  stock,
  categoria,
}) => {
  return (
    <div>
      <Center p="1rem">
        <Card className="card-main">
          <CardBody>
            <img src={imagen} />
            <Stack mt="6" spacing="3">
              <Heading size="md">{modelo}</Heading>
              <Text color="blue.800" fontSize="l">
                Marca: {marca}
              </Text>
              <Text color="blue.800" fontSize="l">
                Modelo: {modelo}
              </Text>
              <Text color="blue.800" fontSize="l">
                Precio: ${precio}
              </Text>
              <Text color="blue.800" fontSize="l">
                Descripcion: {descripcion}
              </Text>
              <Text color="blue.800" fontSize="l">
                Estado: {estado}
              </Text>
              <Text color="blue.800" fontSize="l">
                Stock: {stock}
              </Text>
              <Text color="blue.800" fontSize="l">
                Categoria: {categoria}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter className="card-footer">
            <Center className="btn-center">
              <Button variant="solid" colorScheme="blue">
                <Link to={`/item/${id}`}>Details</Link>
              </Button>
            </Center>
          </CardFooter>
        </Card>
      </Center>
    </div>
  );
};

export default Item;
