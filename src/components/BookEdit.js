import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Input,
  Button,
  useToast,
  Editable,
  EditablePreview,
  EditableInput,
  EditableTextarea,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { updateBook } from "../features/books/booksSlice";

const BookEdit = ({ title }) => {
  const toast = useToast();
  const { id } = useParams();
  const books = useSelector((state) => state.books);
  const book = books.find((book) => book.id === id);
  const [bookData, setBookData] = useState(() => {
    return {
      id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
      year: book.year,
      image: book.image,
      description: book.description,
    };
  });
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = title;
  });

  return (
    <Box w="100%" display="flex" justifyContent="center" alignItems="center">
      <Box
        color="beige.100"
        p={5}
        my={5}
        w={{ base: "100%", lg: "40%" }}
        borderWidth={2}
        borderColor="orange.100"
        bgColor="maroon.op"
        borderRadius={20}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Editable colorScheme="yellow" defaultValue={book.title}>
          <Input
            onChange={(e) => {
              setBookData({ ...bookData, title: e.target.value });
            }}
            as={EditableInput}
          />
          <EditablePreview />
        </Editable>
        <Editable defaultValue={book.author}>
          <Input
            onChange={(e) => {
              setBookData({ ...bookData, author: e.target.value });
            }}
            as={EditableInput}
          />
          <EditablePreview />
        </Editable>
        <Editable defaultValue={book.category}>
          <Input
            onChange={(e) => {
              setBookData({ ...bookData, category: e.target.value });
            }}
            as={EditableInput}
          />
          <EditablePreview />
        </Editable>
        <Editable defaultValue={book.year}>
          <Input
            onChange={(e) => {
              setBookData({ ...bookData, year: e.target.value });
            }}
            as={EditableInput}
          />
          <EditablePreview />
        </Editable>
        <Editable defaultValue={book.image}>
          <Input
            onChange={(e) => {
              setBookData({ ...bookData, image: e.target.value });
            }}
            as={EditableInput}
          />
          <EditablePreview />
        </Editable>
        <Editable defaultValue={book.description}>
          <EditableTextarea
            onChange={(e) => {
              setBookData({ ...bookData, description: e.target.value });
            }}
            minH="70px"
            maxH="400px"
            maxLength={500}
          />
          <EditablePreview />
        </Editable>
        <Button
          mt={5}
          onClick={() => {
            dispatch(updateBook(bookData));
            toast({
              title: `${book.title}`,
              description: "has been updated",
              status: "success",
              duration: 2000,
              isClosable: true,
              position: "top-right",
            });
          }}
          colorScheme="yellow"
        >
          {" "}
          Save changes
        </Button>
      </Box>
    </Box>
  );
};

export default BookEdit;
