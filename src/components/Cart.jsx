import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Container,
  Flex,
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
  Link,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import MostrarCompra from "./MostrarCompra";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [showForm, setShowForm] = useState(false);

  const getProduct = async (db) => {
    const docRef = doc(db, "rodados", categoriaId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("document data: ", docSnap.data());
      let producto = docSnap.data();
      producto.id = docSnap.id;
      setProducto(producto);
    }
  };

  let total = 0;
  cart.forEach((item) => {
    total += item.precio * item.quantity;
  });

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const [order, setOrder] = useState({
    nombre: "",
    documento: "",
    email: "",
    telefono: "",
  });

  const abrirCompra = (e) => {
    e.preventDefault();

    setOrder({
      nombre: "",
      documento: "",
      email: "",
      telefono: "",
    });
    setShowForm(true);
  };

  const enviarCompra = async (e) => {
    e.preventDefault();

    let random = Math.trunc(Math.random() * 1000);

    const orderData = {
      orden: "000" + random,
      nombre: order.nombre,
      documento: order.documento,
      email: order.email,
      telefono: order.telefono,
      total: total,
      items: cart.map((item) => ({
        id: item.id,
        marca: item.marca,
        modelo: item.modelo,
        precio: item.precio,
        cantidad: item.quantity,
      })),
    };

    try {
      const docRef = await addDoc(collection(db, "ordenes"), orderData);
      setCart([]);
      setShowForm(false);
      window.alert("¡Su pedido ha sido enviado!");
      window.location.href = "/MostrarCompra";
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {cart.map((item) => {
        return (
          <Container key={item.id} className="main-catalogue">
            <Card maxW="sm">
              <CardBody>
                <Image borderRadius="lg" src={item.imagen} />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{item.marca}</Heading>
                  <Text color="blue.800" fontSize="l">
                    Modelo: {item.modelo}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Precio: U$S {item.precio}
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
                <Button size="sm" colorScheme="blue" onClick={abrirCompra}>
                  Completa tu compra
                </Button>
                <Button
                  colorScheme="red"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Delete from cart
                </Button>
              </CardFooter>
            </Card>
          </Container>
        );
      })}
      {showForm && (
        <Container>
          <Card maxW="sm">
            <CardBody>
              <Stack mt="6" spacing="3">
                <div>Total: U$S {total}</div>
                <Text color="blue.800" fontSize="l">
                  Nombre completo
                </Text>
                <Input
                  type="text"
                  value={order.nombre}
                  onChange={(e) =>
                    setOrder({ ...order, nombre: e.target.value })
                  }
                />
                <Text color="blue.800" fontSize="l">
                  E-mail
                </Text>
                <Input
                  type="text"
                  value={order.email}
                  onChange={(e) =>
                    setOrder({ ...order, email: e.target.value })
                  }
                />
                <Text color="blue.800" fontSize="l">
                  Documento
                </Text>
                <Input
                  type="text"
                  value={order.documento}
                  onChange={(e) =>
                    setOrder({ ...order, documento: e.target.value })
                  }
                />
                <Text color="blue.800" fontSize="l">
                  Numero de contacto
                </Text>
                <Input
                  type="text"
                  value={order.telefono}
                  onChange={(e) =>
                    setOrder({ ...order, telefono: e.target.value })
                  }
                />
              </Stack>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue" size="sm" onClick={enviarCompra}>
                <Link to={"/MostrarCompra"}>Finalizar compra</Link>
              </Button>
            </CardFooter>
          </Card>
        </Container>
      )}
    </>
  );
};

export default Cart;
