import {
  Modal,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  Button,
  Box,
  Image,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const BookDetails = ({
  onOpen,
  isOpen,
  onClose,
  image,
  title,
  category,
  author,
  published,
  id,
  description,
  pages,
}) => {
  return (
    <>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "sm", md: "xl", lg: "5xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="maroon.700" color="beige.100">
            Book details
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody bg="beige.100">
            <Box
              gap={2}
              display="flex"
              // borderWidth={2}
              // borderColor="red"
              flexDirection={{ base: "column", md: "row" }}
              alignItems={{ base: "center", lg: "stretch" }}
              justifyContent="space-between"
              w="100%"
              p={2}
            >
              <Box
                display="flex"
                justifyContent="center"
                w={{ base: "70%", md: "30%" }}
                mt={2}
                borderRadius="lg"
                borderWidth={1}
                borderColor="maroon.900"
              >
                <Image
                  src={image}
                  objectFit="fill"
                  borderRadius="lg"
                  boxSize="100%"
                />
              </Box>
              <Box
                p={2}
                // borderWidth={1}
                // borderColor="yellow"
                gap={2}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                w={{ base: "100%", md: "70%" }}
              >
                <Box display="flex" flexDirection="column" gap={2}>
                  <Heading color="maroon.600" mb={2} as="h2" size="lg">
                    {title}
                  </Heading>
                  <Heading color="orange.900" pl={2} as="h3" size="md">
                    {author}
                  </Heading>
                  <Text
                    color="orange.900"
                    pl={2}
                    fontSize="lg"
                    fontWeight={500}
                  >
                    {published}
                  </Text>
                  <Text
                    color="orange.900"
                    pl={2}
                    fontSize="lg"
                    fontWeight={500}
                  >
                    {category}
                  </Text>
                  <Text
                    color="orange.900"
                    pl={2}
                    textOverflow="ellipsis"
                    noOfLines={{ base: 3, lg: 8 }}
                  >
                    {description}
                  </Text>
                </Box>

                <HStack justifyContent="space-between" pr={5}>
                  <Text color="orange.900" pl={2}>
                    Pages: {pages}
                  </Text>
                  <Text color="orange.900">ISBN</Text>
                </HStack>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter bg="maroon.700">
            <Button colorScheme="yellow" mr={3} onClick={onClose}>
              Close
            </Button>
            <Link to={`/edit-book/${id}`}>
              <Button colorScheme="yellow" variant="ghost">
                Edit book
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BookDetails;
