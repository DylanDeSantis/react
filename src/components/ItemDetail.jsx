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
  } from "@chakra-ui/react"
  import { useParams } from "react-router-dom"
  import ItemCounts from "./ItemCounts"


const ItemDetail = ({rodados}) => {
    return (
        <>
         {rodados && <Center p="1rem">
                <Card className="card-main">
                <CardBody>
                    <Image borderRadius="lg" src={rodados.imagen} />
                    <Stack mt="6" spacing="3">
                    <Heading size="md">{rodados.marca}</Heading>
                        <Text color="blue.800" fontSize="l">
                        Modelo: {rodados.modelo}
                        </Text>
                        <Text color="blue.800" fontSize="l">
                            Precio: {rodados.price}
                        </Text>
                        <Text color="blue.800" fontSize="l">
                            Descripcion: {rodados.description}
                        </Text>
                        <Text color="blue.800" fontSize="l">
                            Estado: {rodados.estado}
                        </Text>
                        <Text color="blue.800" fontSize="l">
                            Stock: {rodados.stock}
                        </Text>
                        <Text color="blue.800" fontSize="l">
                            Categoria: {rodados.category}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter className="card-footer">
                    <ItemCounts stock={rodados.stock} />
                    <Center className="btn-center">
                    <Button variant="solid" colorScheme="blue">
                        Buy
                    </Button>
                    </Center>
                </CardFooter>
                </Card>
            </Center>
        }
        </>
    )
    }

export default ItemDetail