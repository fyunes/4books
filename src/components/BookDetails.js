import { Modal, ModalFooter, ModalBody, ModalCloseButton, ModalOverlay, ModalHeader, ModalContent, Button, Box, Image, Heading, Text, HStack } from "@chakra-ui/react"


const BookDetails = ({onOpen, isOpen, onClose, image, title, category, author, published, id, description, pages}) => {
    
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box display="flex" borderWidth={2} borderColor="red" w="100%" p={5}>
            <Box w="50%">
                <Image src={image} objectFit="fill" boxSize="80%" height="auto" />
            </Box>
            <Box gap={2} display="flex" flexDirection="column" w="60%">
                <Heading as="h2" size="lg">{title}</Heading>
                <Heading as="h3" size="md">{author}</Heading>
                <Text fontSize="lg" fontWeight={500}>{published}</Text>
                <Text fontSize="lg" fontWeight={500}>{category}</Text>
                <Text textOverflow="ellipsis" noOfLines={5}> {description}</Text>
                <HStack justifyContent="space-between" px={2}>
                    <Text>Pages: {pages}</Text>
                    <Text>ISBN</Text>
                </HStack>
            </Box>           
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost'>Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
)
}

export default BookDetails

