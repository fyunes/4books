import {
  Box,
  Image,
  Button,
  Heading,
  Flex,
  HStack,
  Tooltip,
  Tag,
  VStack,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { EditIcon } from "@chakra-ui/icons";
import "animate.css";
import { deleteBook } from "../features/books/booksSlice";

const Book = ({ published, category, author, image, title, id }) => {
  const dispatch = useDispatch();
  return (
    <Box
      className="animate__animated animate__bounceInDown"
      py={3}
      gap={1}
      shadow="lg"
      w={{ base: "250px", md: "250px" }}
      h="400px"
      bgColor="brown.900"
      bgGradient="linear(to-r,#826f81ff, #805e4f, #9e6545, #c18459, #d7b699)"
      backgroundBlendMode="soft-light"
      textAlign="center"
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      rounded="md"
      borderBottomWidth={6}
      borderLeftWidth={10}
      borderColor="maroon.900"
      borderBottomColor="beige.300"
    >
      <Box
        borderRadius="lg"
        borderWidth={1}
        borderColor="beige.100"
        w="65%"
        h="60%"
      >
        <Image
          cursor="pointer"
          borderRadius="lg"
          src={image}
          objectFit="fill"
          boxSize="100%"
        />
      </Box>
      <Box
        shadow="md"
        w="100%"
        py={2.5}
        bgGradient="linear(to-r, orange.100, beige.100)"
      >
        <Tooltip placement="top" label={title} hasArrow>
          <Heading
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
            px={2}
            color="maroon.700"
            size="sm"
            as="h4"
          >
            {title}
          </Heading>
        </Tooltip>
      </Box>
      <HStack w="100%" justifyContent="center" gap={2} px={2}>
        <VStack alignItems="center">
          <Heading
            textShadow="0 1px 1px black"
            my={2}
            color="beige.100"
            size="sm"
            as="h4"
          >
            {author}
          </Heading>
          <Flex gap={3}>
            <Tag
              fontSize="1.1rem"
              color="yellow.100"
              textShadow="0 1px 1px black"
              bgColor="yellow.600"
              variant="solid"
            >
              {category}
            </Tag>
            <Tag
              px={3}
              fontSize="1.1rem"
              color="yellow.100"
              bgColor="yellow.600"
              textShadow="0 1px 1px black"
              variant="solid"
            >
              {published}
            </Tag>
            <Tooltip label="Edit book info" hasArrow>
              <Button
                onClick={() => {
                  console.log("this id in delete button", id);
                  dispatch(deleteBook(id));
                }}
                shadow="md"
                colorScheme="yellow"
              >
                <EditIcon />
              </Button>
            </Tooltip>
          </Flex>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Book;
