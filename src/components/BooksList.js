import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Book from "./Book";

const BooksList = () => {
  const myBooks = useSelector((state) => state.books);

  return (
    <Flex
      bgColor="maroon.op"
      py={5}
      px={2}
      borderWidth={2}
      borderColor="orange.100"
      borderRadius={10}
      justifyContent="center"
      alignItems="start"
      wrap="wrap"
      gap={5}
      w={{ base: "90%", sm: "80%", md: "60%", lg: '80%' }}
    >
      {myBooks.slice(0, 16).map((book, index) => {
        return (
          <Book
            published={book.year}
            category={book.category}
            author={book.author}
            image={book.image}
            key={index}
            title={book.title}
          />
        );
      })}
    </Flex>
  );
};

export default BooksList;
