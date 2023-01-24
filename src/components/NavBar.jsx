import CartWidget from "./CartWidget";
import { Container, Flex, Spacer, Box, Heading } from '@chakra-ui/react'

const NavBar = ({nombre, prueb}) => {
  return (
    <>
    <Container  maxW="100rem" bg="blue.300" color="red">
        <Flex alignContent="center" gap="2">
            <Box p="10" color="red"> 
                <Heading size="md">DESDE el NAVBAR</Heading>
            </Box>
            <Spacer/>
            <Box p="10" color="white"> 
                <CartWidget/>
            </Box>
        </Flex>

        <h1>{nombre}</h1>
        <h2>{prueb}</h2>
    </Container>
    </>
  )
}

export default NavBar