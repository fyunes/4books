import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Book from "./Book";

const BooksList = () => {
  const myBooks = useSelector((state) => state.books);

  return (
    <Flex
      py={5}
      px={2}
      borderWidth={2}
      borderColor="beige.100"
      borderRadius={10}
      justifyContent="center"
      alignItems="start"
      wrap="wrap"
      gap={5}
      w="70%"
    >
      {myBooks.map((book) => {
        return (
          <Book
            category={book.volumeInfo?.categories[0]}
            author={book.volumeInfo.authors[0]}
            image={book.volumeInfo.imageLinks?.thumbnail}
            key={book.id}
            title={book.volumeInfo.title}
          />
        );
      })}
    </Flex>
  );
};

export default BooksList;
