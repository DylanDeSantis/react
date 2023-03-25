import { useContext, useState } from "react";
import {
  Text,
  ButtonGroup,
  IconButton,
  Tooltip,
  Center,
  Button,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { CartContext } from "../context/ShoppingCartContext";

const ItemCounts = ({
  stock,
  id,
  imagen,
  precio,
  marca,
  modelo,
  estado,
  categoria,
}) => {
  const { cart, setCart } = useContext(CartContext);
  const { count, setCount } = useContext(CartContext);

  const sumar = () => {
    setCount(count + 1);
  };
  const restar = () => {
    setCount(count - 1);
  };

  const addToCart = () => {
    setCart((producto) => {
      const isItemFound = producto.find((item) => item.id === id);
      if (isItemFound) {
        return producto.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + count };
          } else {
            return item;
          }
        });
      } else {
        return [
          ...producto,
          {
            id,
            quantity: count,
            imagen,
            precio,
            marca,
            modelo,
            estado,
            categoria,
          },
        ];
      }
    });
  };

  return (
    <>
      <ButtonGroup size="sm" isAttached variant="outline">
        {count < 1 ? (
          <Tooltip label="minimum stock reached" placement="bottom">
            <IconButton icon={<MinusIcon />} isDisabled />
          </Tooltip>
        ) : (
          <IconButton icon={<MinusIcon />} onClick={restar} />
        )}
        <Center w="50px" h="30px">
          <Text as="b">{count}</Text>
        </Center>
        {count < stock ? (
          <IconButton icon={<AddIcon />} onClick={sumar} />
        ) : (
          <Tooltip label="stock limit reached" placement="bottom">
            <IconButton icon={<AddIcon />} isDisabled />
          </Tooltip>
        )}
        <Center>
          <Button
            onClick={() => addToCart()}
            variant="solid"
            colorScheme="blue"
          >
            Add to cart: {count}
          </Button>
        </Center>
      </ButtonGroup>
    </>
  );
};

export default ItemCounts;
