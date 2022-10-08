import BooksList from "../../components/BooksList";
import BooksMenu from "../../components/BookMenu";
import { Flex, HStack } from "@chakra-ui/react";

const Library = () => {
  return (
    <Flex
      py={5}
      borderWidth={2}
      borderColor="red"
      w="100%"
      alignItems="center"
      justifyContent="center"
      direction="column"
      color="beige.100"
    >
      <HStack
        py={5}
        px={2}
        w="95%"
        borderWidth={2}
        borderColor="yellow"
        justifyContent="space-between"
      >
        <BooksMenu />
        <BooksList />
      </HStack>
    </Flex>
  );
};

export default Library;
