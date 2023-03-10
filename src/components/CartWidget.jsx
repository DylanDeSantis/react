import { Button, Container, Flex } from "@chakra-ui/react";
import React from "react";

const CartWidget = () => {
  return (
    <>
      <Container>
        <Flex w="100%" justifyContent="flex-end">
          <div className="Cart">
            <Button size="lg" variant="solid" colorScheme="black" top="-4">
              <span className="material-symbols-outlined">shopping_cart</span>
            </Button>
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default CartWidget;
