import {
  VStack,
  HStack,
  Button,
  Input,
  Divider,
  Tag,
  Select,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CloseIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilter,
  deleteFilter,
  deleteAllFilters,
} from "../features/books/filtersSlice";

const BookMenu = ({ searchResults, setSearchResults }) => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const myBooks = useSelector((state) => state.books);
  const [searchInput, setSearchInput] = useState("");
  const [selectedFilters, setSelectedFilters] = useState(() => []);
  const [availableFilters, setAvailableFilters] = useState({
    authors: [],
    categories: [],
    years: [],
  });

  useEffect(() => {
    const getFilters = (filterName, books = searchResults) => {
      return [...new Set(books.map((book) => book[filterName]))]
        .sort()
        .map((element) => {
          return { value: element, isSelected: false };
        });
    };
    setAvailableFilters((availableFilters) => {
      return {
        ...availableFilters,
        authors: getFilters("author"),
        categories: getFilters("category"),
        years: getFilters("year"),
      };
    });
  }, [searchResults]);

  useEffect(() => {
    let newResults = [...myBooks];
    if (selectedFilters.length > 0) {
      for (let filter of selectedFilters) {
        newResults = newResults.filter(
          (book) => book[filter.type] === filter.value
        );
      }
    }
    setSearchResults(newResults);
  }, [selectedFilters, myBooks, setSearchResults]);

  const handleSelectFilter = (e, key) => {
    setSelectedFilters([
      ...selectedFilters,
      { type: key, value: e.target.value },
    ]);
    dispatch(
      selectFilter({ filterName: e.target.name, filterValue: e.target.value })
    );
    const newResults = searchResults.filter(
      (book) => book[key] === e.target.value
    );
    setSearchResults((searchResults) => (searchResults = newResults));
  };

  const handleChange = () => {
    if (searchInput.length === 1) setSearchResults(myBooks);
    else {
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
      setSearchResults(results);
    }
  };

  const handleDeleteFilter = (filterName, value) => {
    const filterValue = value;
    setSelectedFilters((selectedFilters) => {
      return selectedFilters.length > 1
        ? selectedFilters.filter((filter) => filter.value !== filterValue)
        : [];
    });
    dispatch(
      deleteFilter({
        filterName,
        filterValue,
      })
    );
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
          {availableFilters.authors.map((author, index) => {
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
          {availableFilters.categories.map((category, index) => {
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
          {availableFilters.years.map((year, index) => {
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
          onClick={(e) => {
            setSearchResults(myBooks);
            setSearchInput("");
            dispatch(deleteAllFilters());
            setSelectedFilters(() => []);
          }}
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
