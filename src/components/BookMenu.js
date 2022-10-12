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
import { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";

const BookMenu = () => {
  const myBooks = useSelector((state) => state.books);

  const [selectedFilters, setSelectedFilters] = useState({
    author: [],
    category: [],
    year: [],
  });

  const [availableFilters, setAvailableFilters] = useState({
    author: [],
    category: [],
    year: [],
  });

  const getFilters = useCallback(() => {
    const getUniqueSet = (key) => {
      return [...new Set(myBooks.map((book) => book[key]))].sort();
    };
    setAvailableFilters((availableFilters) => ({
      ...availableFilters,
      author: getUniqueSet("author"),
      category: getUniqueSet("category"),
      year: getUniqueSet("year"),
    }));
  }, [myBooks]);

  useEffect(getFilters, [myBooks, getFilters]);
  //continuar lo de los filtros, algo no funciona bien.
  const handleFilters = (e) => {
    setSelectedFilters({
      ...selectedFilters,
      [e.target.name]: [...selectedFilters[e.target.name], e.target.value],
    });
    const updatedFilters = availableFilters[e.target.name].filter(
      (element) => element !== e.target.value
    );
    setAvailableFilters({
      ...availableFilters,
      [e.target.name]: updatedFilters,
    });
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
        focusBorderColor="beige.100"
        w="80%"
        _placeholder={{ color: "yellow.100" }}
        placeholder="Search..."
      />
      {(selectedFilters.author.length ||
        selectedFilters.category.length ||
        selectedFilters.year.length) && (
          <HStack wrap="wrap" justifyContent="center" gap={3} p={3}>
            {selectedFilters.author &&
              selectedFilters.author.map((author, index) => {
                return (
                  <Tag
                    key={index}
                    fontSize="1rem"
                    userSelect="none"
                    color="#2c0d0f"
                    bgColor="yellow.300"
                  >
                    {author}
                    <Button
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
            {selectedFilters.category &&
              selectedFilters.category.map((category, index) => {
                return (
                  <Tag
                    key={index}
                    fontSize="1rem"
                    userSelect="none"
                    color="#2c0d0f"
                    bgColor="yellow.300"
                  >
                    {category}
                    <Button
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
            {selectedFilters.year &&
              selectedFilters.year.map((year, index) => {
                return (
                  <Tag
                    key={index}
                    fontSize="1rem"
                    userSelect="none"
                    color="#2c0d0f"
                    bgColor="yellow.300"
                  >
                    {year}
                    <Button
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
          onChange={(e) => handleFilters(e)}
          name="author"
          borderColor="beige.600"
          borderWidth={1}
          color="beige.100"
          bg="maroon.900"
          variant="filled"
          colorScheme="black"
          placeholder="Filter by Author"
        >
          {availableFilters.author.map((author, index) => (
            <option
              style={{ backgroundColor: "#2c0d0f", color: "#ffde95" }}
              value={author}
              key={index}
            >
              {author}
            </option>
          ))}
        </Select>
        <Select
          onChange={(e) => handleFilters(e)}
          name="category"
          borderColor="beige.600"
          borderWidth={1}
          color="beige.100"
          bg="maroon.900"
          variant="filled"
          colorScheme="black"
          placeholder="Filter by Category"
        >
          {availableFilters.category.map((category, index) => (
            <option
              style={{ backgroundColor: "#2c0d0f", color: "#ffde95" }}
              value={category}
              key={index}
            >
              {category}
            </option>
          ))}
        </Select>
        <Select
          onChange={(e) => handleFilters(e)}
          name="year"
          borderColor="beige.600"
          borderWidth={1}
          color="beige.100"
          bg="maroon.900"
          variant="filled"
          colorScheme="black"
          placeholder="Filter by Year"
        >
          {availableFilters.year.map((year, index) => (
            <option
              style={{ backgroundColor: "#2c0d0f", color: "#ffde95" }}
              value={year}
              key={index}
            >
              {year}
            </option>
          ))}
        </Select>
        <Button fontSize="lg" colorScheme="yellow">
          Search book
        </Button>
      </VStack>
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
