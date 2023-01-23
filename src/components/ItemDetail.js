
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

import {useContext} from 'react'

import {CartContext} from './Cart/CartContext'

const ItemDetail = ({ product }) => {


  const { addToCart } =  useContext(CartContext)


  const onAdd = (count) => {
    addToCart(product.id, count)
  }

  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "300px" }}
          src={product.imgUrl}
          alt={product.name}
        />

        <Stack>
          <CardBody>
            <Heading size="2xl" py="3" px="4" className="capitalize">
              {product.name}
            </Heading>

            <Text py="5" fontSize="2xl" px="4">
              {product.detail}
            </Text>
            <Text color="black" fontSize="2xl" py="5" px="4">
              ${product.price} x unidad
            </Text>
          </CardBody>

          <CardFooter p="10">
            <Button variant="solid" colorScheme="pink" >
              Agregar al carrito
            </Button>

            <Button variant="solid" colorScheme="green" >
              +
            </Button>

            <Button variant="solid" colorScheme="green" >
              -
            </Button>

            <p>Cantidad: </p>




          </CardFooter>
        </Stack>
      </Card>

    </>
  );
};

export default ItemDetail;
