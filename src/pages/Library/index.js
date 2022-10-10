import BooksList from "../../components/BooksList";
import BooksMenu from "../../components/BookMenu";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

const Library = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });

  return (
    <Box
      w="100%"
      alignItems="center"
      justifyContent="center"
      direction="column"
      // borderWidth={2}
      // borderColor='red'
    >
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: 'start' }}
        justifyContent="center"
        py={5}
        px={3}
        w="100%"
        // borderColor='white'
        // borderWidth={2}
        gap={2}
        borderRadius={20}
      >
        <BooksMenu />
        <BooksList />
      </Box>
    </Box>
  );
};

export default Library;
