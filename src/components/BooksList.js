import { Flex, Text, Tag } from "@chakra-ui/react";
import Book from "./Book";

const BooksList = ({
  deletedBooks,
  setDeletedBooks,
  searchResults,
  setSearchResults,
}) => {
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
      w={{ base: "90%", sm: "80%", md: "60%", lg: "80%" }}
    >
      {(searchResults.length &&
        searchResults.map((book, index) => {
          return (
            <Book
              searchResults={searchResults}
              setSearchResults={setSearchResults}
              deletedBooks={deletedBooks}
              setDeletedBooks={setDeletedBooks}
              id={book.id}
              published={book.year}
              category={book.category}
              author={book.author}
              image={book.image}
              key={index}
              title={book.title}
              description={book.description}
              pages={book.pageCount}
            />
          );
        })) || (
        <Text
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="center"
          gap={2}
          alignItems="center"
          fontSize={20}
          textAlign="center"
          color="beige.100"
        >
          Nothing to see here! Click on the{" "}
          <Tag mx={1} colorScheme="yellow">
            Add new book
          </Tag>{" "}
          button to start adding books to your library
        </Text>
      )}
    </Flex>
  );
};

export default BooksList;
