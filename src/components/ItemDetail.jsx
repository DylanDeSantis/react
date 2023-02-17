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
    const {id} = useParams()
    const filtroRodado = rodados.filter((rodado) => rodado.id == id)

    return (
        <>
        {filtroRodado.map((rodado) => (
            <div key={rodado.id}>
            <Center p="1rem">
                <Card className="card-main">
                <CardBody>
                    <Image borderRadius="lg" src={imagen} />
                    <Stack mt="6" spacing="3">
                    <Heading size="md">{rodado.marca}</Heading>
                        <Text color="blue.800" fontSize="l">
                        Modelo: {rodado.modelo}
                        </Text>
                        <Text color="blue.800" fontSize="l">
                            Precio: {rodado.price}
                        </Text>
                        <Text color="blue.800" fontSize="l">
                            Descripcion: {rodado.description}
                        </Text>
                        <Text color="blue.800" fontSize="l">
                            Estado: {rodado.estado}
                        </Text>
                        <Text color="blue.800" fontSize="l">
                            Stock: {rodado.stock}
                        </Text>
                        <Text color="blue.800" fontSize="l">
                            Categoria: {rodado.category}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter className="card-footer">
                    <ItemCount stock={rodado.stock} />
                    <Center className="btn-center">
                    <Button variant="solid" colorScheme="blue">
                        Buy
                    </Button>
                    </Center>
                </CardFooter>
                </Card>
            </Center>
            </div>
        ))}
        </>
    )
    }

export default ItemDetail