import {
  VStack,
  HStack,
  Button,
  Input,
  Divider,
  Tag,
  Select,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CloseIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchBooks, showAll } from "../features/books/booksSlice";
import items from "../assets/myBooks.json";
import { selectFilter, deleteFilter } from "../features/books/filtersSlice";

const BookMenu = ({ deletedBooks, searchResults, setSearchResults }) => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const myBooks = useSelector((state) => state.books);
  const toast = useToast();
  const [JSONbooks, setJSONbooks] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [hasMatch, setHasMatch] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    const books = items.books;
    setJSONbooks(books);
    const parcialResults = () => {
      if (!selectedFilters.length) return myBooks;
      myBooks.map((book) => {
        if (selectedFilters.includes(book.author || book.category || book.year))
          return book;
        else return null;
      });
    };
    if (parcialResults.length <= 0) setSearchResults(JSONbooks);
    else setSearchResults(parcialResults);
    setSearchResults(books);
  }, [selectedFilters, myBooks]);



  const handleSelectFilter = (e, key) => {
    setSelectedFilters([...selectedFilters, e.target.value]);
    dispatch(
      selectFilter({ filterName: e.target.name, filterValue: e.target.value })
    );
    const parcialResults = myBooks.filter(
      (book) => book[key] === e.target.value
    );
    dispatch(searchBooks(parcialResults));
  };

  const handleChange = () => {
    if (!searchInput) return myBooks;
    const isFoundIn = (where) => where.toLowerCase().includes(searchInput);
    const results = [];
    myBooks.forEach((book) => {
      if (
        isFoundIn(book.title) ||
        isFoundIn(book.description) ||
        isFoundIn(book.author)
      )
        results.push(book);
    });
    results.length && setHasMatch(true);
    setSearchResults(results);
  };

  const handleDeleteFilter = (filterName, value) => {
    const filterValue = value;
    setSelectedFilters((selectedFilters) =>
      selectedFilters.filter((filter) => filter !== filterValue)
    );
    dispatch(
      deleteFilter({
        filterName,
        filterValue,
      })
    );

    dispatch(searchBooks(searchResults));
  };

  const handleSearch = () => {
    if (!hasMatch)
      toast({
        title: "Not found",
        description: "Your search doesn't match any of your books",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right ",
      });
    if (searchInput.length) {
      dispatch(searchBooks(searchResults));
      setSearchInput("");
      setHasMatch(false);
    }
  };

  return (
    <VStack
      color="beige.100"
      bgColor="maroon.op"
      alignItems="center"
      px={5}
      py={7}
      spacing={7}
      borderWidth={2}
      borderRadius={10}
      borderColor="orange.100"
      width={{ base: "90%", sm: "70%", md: "40%", lg: "25%" }}
    >
      <Input
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
          handleChange();
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch(e);
        }}
        focusBorderColor="beige.100"
        w="80%"
        _placeholder={{ color: "yellow.100" }}
        placeholder="Search..."
      />
      {filters.filtersSelected > 0 && (
        <HStack wrap="wrap" justifyContent="center" gap={3} p={3}>
          {filters.authors.length &&
            filters.authors.map((author, index) => {
              if (!author.isSelected) return null;
              return (
                <Tag
                  key={index}
                  fontSize="1rem"
                  userSelect="none"
                  color="#2c0d0f"
                  bgColor="yellow.300"
                >
                  {author.value}
                  <Button
                    onClick={() => handleDeleteFilter("authors", author.value)}
                    mx={1}
                    color="maroon.900"
                    colorScheme="yellow.100"
                    pl={1}
                    size="fit-content"
                  >
                    <CloseIcon w=".5rem" />
                  </Button>
                </Tag>
              );
            })}
          ;
          {filters.categories.length &&
            filters.categories.map((category, index) => {
              if (!category.isSelected) return null;
              return (
                <Tag
                  key={index}
                  fontSize="1rem"
                  userSelect="none"
                  color="#2c0d0f"
                  bgColor="yellow.300"
                >
                  {category.value}
                  <Button
                    onClick={(e) =>
                      handleDeleteFilter("categories", category.value)
                    }
                    mx={1}
                    color="maroon.900"
                    colorScheme="yellow.100"
                    pl={1}
                    size="fit-content"
                  >
                    <CloseIcon ml={1} w=".5rem" />
                  </Button>
                </Tag>
              );
            })}
          {filters.years.length &&
            filters.years.map((year, index) => {
              if (!year.isSelected) return null;
              return (
                <Tag
                  key={index}
                  fontSize="1rem"
                  userSelect="none"
                  color="#2c0d0f"
                  bgColor="yellow.300"
                >
                  {year.value}
                  <Button
                    onClick={(e) => handleDeleteFilter("years", year.value)}
                    mx={1}
                    color="maroon.900"
                    colorScheme="yellow.100"
                    pl={1}
                    size="fit-content"
                  >
                    <CloseIcon ml={1} w=".5rem" />
                  </Button>
                </Tag>
              );
            })}
        </HStack>
      )}
      <VStack w="80%" spacing={4}>
        <Select
          onChange={(e) => handleSelectFilter(e, "author")}
          value="Filter by Author"
          name="authors"
          borderColor="beige.600"
          borderWidth={1}
          color="beige.100"
          bg="maroon.900"
          variant="filled"
          colorScheme="black"
          placeholder="Filter by Author"
        >
          {filters.authors.map((author, index) => {
            if (author.isSelected) return null;
            return (
              <option
                style={{ backgroundColor: "#2c0d0f", color: "#ffde95" }}
                value={author.value}
                key={index}
              >
                {author.value}
              </option>
            );
          })}
        </Select>
        <Select
          onChange={(e) => handleSelectFilter(e, "category")}
          value="Filter by Category"
          name="categories"
          borderColor="beige.600"
          borderWidth={1}
          color="beige.100"
          bg="maroon.900"
          variant="filled"
          colorScheme="black"
          placeholder="Filter by Category"
        >
          {filters.categories.map((category, index) => {
            if (category.isSelected) return null;
            return (
              <option
                style={{ backgroundColor: "#2c0d0f", color: "#ffde95" }}
                value={category.value}
                key={index}
              >
                {category.value}
              </option>
            );
          })}
        </Select>
        <Select
          onChange={(e) => handleSelectFilter(e, "year")}
          value="Filter by Year"
          name="years"
          borderColor="beige.600"
          borderWidth={1}
          color="beige.100"
          bg="maroon.900"
          variant="filled"
          colorScheme="black"
          placeholder="Filter by Year"
        >
          {filters.years.map((year, index) => {
            if (year.isSelected) return null;
            return (
              <option
                style={{ backgroundColor: "#2c0d0f", color: "#ffde95" }}
                value={year.value}
                key={index}
              >
                {year.value}
              </option>
            );
          })}
        </Select>
      </VStack>
      <HStack>
        <Button
          onClick={(e) => handleSearch(e)}
          fontSize="lg"
          colorScheme="yellow"
        >
          Search book
        </Button>
        <Button
          onClick={(e) => dispatch(showAll(deletedBooks))}
          fontSize="lg"
          colorScheme="yellow"
        >
          Show all books
        </Button>
      </HStack>

      <Divider w="80%" colorScheme="yellow" />
      <Link to="/add-book">
        <Button fontSize="lg" colorScheme="yellow">
          Add new book
        </Button>
      </Link>
    </VStack>
  );
};

export default BookMenu;
