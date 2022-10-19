import BooksList from "../../components/BooksList";
import BooksMenu from "../../components/BookMenu";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteAllFilters } from "../../features/books/filtersSlice";

const Library = ({ title }) => {
  const myBooks = useSelector((state) => state.books);
  const [searchResults, setSearchResults] = useState(myBooks);
  const [deletedBooks, setDeletedBooks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = title;
  });

  useEffect(() => {
    dispatch(deleteAllFilters());
  }, [dispatch]);

  return (
    <Box
      w="100%"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "start" }}
        justifyContent={{ base: "center", md: "space-between" }}
        py={5}
        w="100%"
        gap={5}
        borderRadius={20}
      >
        <BooksMenu
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />
        <BooksList
          deletedBooks={deletedBooks}
          setDeletedBooks={setDeletedBooks}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />
      </Box>
    </Box>
  );
};

export default Library;
