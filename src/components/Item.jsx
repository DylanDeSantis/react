import yamahaFz from "../assets/fzFi150.png"
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
} from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Item = (id, marca, modelo, price, description, estado, stock, category) => {
  return (
    <div>
      <div key={id}>
        <Center p="1rem">
          <Card className="card-main">
            <CardBody>
                <img src={yamahaFz}/>
                <Stack mt="6" spacing="3">
                  <Heading size="md">{modelo}</Heading>
                  <Text color="blue.800" fontSize="l">
                    Modelo: {modelo}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Precio: {price}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Descripcion: {description}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Estado: {estado}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Stock: {stock}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Categoria: {category}
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
    </div>
  )
}

export default Item
