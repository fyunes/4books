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
import { useSelector } from "react-redux";

const BookMenu = () => {
  const myBooks = useSelector((state) => state.books);

  const [selectedFilters, setSelectedFilters] = useState({
    author: ["JK Rowling", "George RR Martin"],
    category: ["Juvenile Fiction", "Fiction"],
    year: ["1997"],
  });

  const [availableFilters, setFilters] = useState({
    authors: [],
    categories: [],
    years: [],
  });

  useEffect(() => {
    const getUniqueSet = (key) => {
      return [...new Set(myBooks.map((book) => book[key]))].sort();
    };
    setFilters((availableFilters) => ({
      ...availableFilters,
      authors: getUniqueSet("author"),
      categories: getUniqueSet("category"),
      years: getUniqueSet("year"),
    }));
  }, [myBooks]);

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
      width={{ base: "90%", sm: "80%", md: "50%", lg: "25%" }}
    >
      <Input
      focusBorderColor="beige.100"
        w="80%"
        _placeholder={{ color: "yellow.100" }}
        placeholder="Search..."
      />
      <HStack wrap="wrap" justifyContent="center" gap={3} p={3}>
        {selectedFilters.author &&
          selectedFilters.author.map((author) => {
            return (
              <Tag
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
          selectedFilters.category.map((category) => {
            return (
              <Tag
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
          selectedFilters.year.map((year) => {
            return (
              <Tag
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
      <VStack w="80%" spacing={4}>
        <Select
          borderColor="beige.600"
          borderWidth={1}
          color="beige.100"
          bg="maroon.900"
          variant="filled"
          colorScheme="black"
          placeholder="Filter by Author"
        >
          {availableFilters.authors.map((author, index) => (
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
          borderColor="beige.600"
          borderWidth={1}
          color="beige.100"
          bg="maroon.900"
          variant="filled"
          colorScheme="black"
          placeholder="Filter by Category"
        >
          {availableFilters.categories.map((category, index) => (
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
          borderColor="beige.600"
          borderWidth={1}
          color="beige.100"
          bg="maroon.900"
          variant="filled"
          colorScheme="black"
          placeholder="Filter by Year"
        >
          {availableFilters.years.map((year, index) => (
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
