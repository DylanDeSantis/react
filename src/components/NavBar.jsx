import { Link } from "react-router-dom";
import CartWidget from "./CartWidget"
import imagen from "../assets/logo.png"
import {
  Flex,
  Box,
  Spacer,
  Heading,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const NavBar = () => {
  return (
    <>
    <Container maxW="1000rem" bg="blue.300" color="#262626">
      <Flex alignItems="center" gap="2">
          <img src={imagen}/>
      <Box p="10" w="300px" h="100">
        <Heading size="md">
          <Link to={"/"}>Home</Link>
        </Heading>
      </Box>
      <Menu>
        <Link to={"/"}>
          <MenuButton
            as={Button}
            size="lg"
            variant="outline"
            colorScheme="blue"
            m="5"
          >
            Motos
          </MenuButton>
        </Link>
      </Menu>
      <Menu>
        <MenuButton
          as={Button}
          size="lg"
          variant="outline"
          colorScheme="blue"
          rightIcon={<ChevronDownIcon />}
          m="5"
      >
        Marcas
        </MenuButton>
        <MenuList className="menu-list-marcas">
          <Link to={`/Marcas/${"Yamaha"}`}>
            <MenuItem>Yamaha</MenuItem>
          </Link>
          <Link to={`/Marcas/${"Honda"}`}>
            <MenuItem>Honda</MenuItem>
          </Link>
          <Link to={`/Marcas/${"Suzuki"}`}>
            <MenuItem>Suzuki</MenuItem>
          </Link>
          <Link to={`/Marcas/${"KTM"}`}>
            <MenuItem>KTM</MenuItem>
          </Link>
          <Link to={`/Marcas/${"Kawasaki"}`}>
            <MenuItem>kawasaki</MenuItem>
          </Link>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          as={Button}
          size="lg"
          variant="outline"
          colorScheme="blue"
          rightIcon={<ChevronDownIcon />}
          m="5"
      >
        Categorias
        </MenuButton>
        <MenuList className="menu-list-categorias">
          <Link to={`/Categorias/${"Calle"}`}>
            <MenuItem>Calle</MenuItem>
          </Link>
          <Link to={`/Categorias/${"Pista"}`}>
            <MenuItem>Pista</MenuItem>
          </Link>
          <Link to={`/Categorias/${"Naked"}`}>
            <MenuItem>Naked</MenuItem>
          </Link>
          <Link to={`/Categorias/${"Adventure"}`}>
            <MenuItem>Adventure</MenuItem>
          </Link>
          <Link to={`/Categorias/${"Enduro"}`}>
            <MenuItem>Enduro</MenuItem>
          </Link>
        </MenuList>
      </Menu>
      <Spacer />
      <Box p="10" w="300px" h="100">
        <Link to={"/cart"}>
          <CartWidget />
        </Link>
      </Box>
      </Flex>
    </Container>
    
    </>
  )
}

export default NavBar