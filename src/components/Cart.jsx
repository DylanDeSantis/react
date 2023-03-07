import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Container,
  Box,
  Textarea,
  Center,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Image,
  Stack,

  // FormControl,
  // FormLabel,
  // Input,
  // FormHelperText,
  // Button,
  // Container,
  // Box,
  // Flex,
  // Textarea,
  // Spacer,
  // ButtonGroup,
  // Table,
  // Thead,
  // Tbody,
  // Tr,
  // Th,
  // Td,
  // TableContainer,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <>
      <Center bg="#D6EAF8" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Tu Carrito
        </Heading>
      </Center>
      {cart.map((item) => {
        return (
          <Container key={item.id} className="main-catalogue">
            <Card maxW="sm">
              <CardHeader>
                <Heading size="md">{item.marca}</Heading>
                <Heading size="md">{item.modelo}</Heading>
              </CardHeader>
              <CardBody>
                <Stack mt="6" spacing="3">
                  <Text color="blue.800" fontSize="l">
                    Modelo: {item.modelo}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Precio: {item.precio}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Descripcion: {item.decripcion}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Estado: {item.estado}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Stock: {item.quantity}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Categoria: {item.categoria}
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Button
                  colorScheme="red"
                  onClick={() => console.log("Eliminando")}
                >
                  Delete from cart
                </Button>
              </CardFooter>
            </Card>
          </Container>
        );
      })}
    </>
  );
};
{
  /* <Flex justify="center">
  <TableContainer>
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>marca</Th>
          <Th>modelo</Th>
          <Th>precio</Th>
          <Th>estado</Th>
          <Th>categoria</Th>
          <Th>Precio total</Th>
        </Tr>
      </Thead>
    </Table>
  </TableContainer>
</Flex>
<br />
<br />
<Flex w="100%" spacing={4} direction="row" align="center">
  <Spacer />
  <ButtonGroup spacing="2"></ButtonGroup>
  <Spacer />
</Flex> */
}

{
  /* //   return (

//     <Container className="cart-container">
//       <FormControl>
//         <Box>
//           <FormLabel>Your name</FormLabel>
//           <Input type="text" />
//           <FormLabel>Email address</FormLabel>
//           <Input type="email" />
//           <FormHelperText>We'll never share your email.</FormHelperText>
//         </Box>
//         <FormLabel>What do you want to tell us?</FormLabel>
//         <Textarea></Textarea>
//         <Box className="btn-send">
//           <Button colorScheme="teal" variant="outline">
//             Send information
//           </Button>
//         </Box>
//       </FormControl>
//     </Container>
//   );
// }; */
}

export default Cart;
