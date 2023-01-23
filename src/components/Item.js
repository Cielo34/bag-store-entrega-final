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

import { Link } from "react-router-dom";



const Item = ({ product, deleteProduct}) => {
  return (
    <Card maxW="sm">
      <Link to={`/item/${product.id}`}>
        <CardBody>
          <Image src={product.imgUrl} alt={product.name} borderRadius="lg" />
          <Stack mt="8" spacing="4">
            <Heading size="lg" className="capitalize" px="2" height="20">
              {product.name}
            </Heading>
            <Text color="black" fontSize="4xl" px="4">
              ${product.price}
            </Text>
          </Stack>
        </CardBody>
      </Link>
      <CardFooter px="10">
        <Link to={`/item/${product.id}`}>
          <Button
            variant="solid"
            colorScheme="green"
            size="lg"
            m={3}
            p={3}
            fontSize="2xl"
          >
            Ver Detalles
          </Button>
        </Link>


      </CardFooter>
    </Card>
  );
};

export default Item;
