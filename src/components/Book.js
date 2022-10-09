import { Box, Text, Image, Heading } from "@chakra-ui/react";

const Book = ({ category, author, image, title }) => {
  return (
    <Box
      className="book"
      py={3}
      gap={2}
      w={[150, 150, 250]}
      h={[300, 300, 400]}
      bgColor="maroon.900"
      textAlign="center"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      opacity={0.9}
      alignItems="center"
      borderRadius="lg"
      borderWidth={1}
      borderColor="brown.100"
    >
      <Image src={image} objectFit="cover" boxSize="60%" />
      <Box w='100%' py={2} bgColor='beige.100'>
        {" "}
        <Heading px={2} color="maroon.900" size="sm" as="h4">
          {title}
        </Heading>
      </Box>

      <Heading color="#f0d290" size="sm" as="h4">
        {author}
      </Heading>
      <Text color="#f0d290" size="sm" as="h4">
        {category}
      </Text>
    </Box>
  );
};

export default Book;
