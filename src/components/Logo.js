import { Box, Heading, Image } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Box display="flex" gap={5}>
      <Image
        borderRadius="full"
        boxSize="70px"
        src="favicon.ico"
        alt="Logo"
      ></Image>
      <Heading
        fontFamily="Barlow Condensed"
        textAlign="center"
        as="h1"
        py={4}
        w="200px"
        color="beige.100"
        borderColor="#de834d"
        borderWidth={2}
        borderRadius={10}
        borderTopRightRadius={50}
        borderBottomLeftRadius={50}
      >
        4Books
      </Heading>
    </Box>
  );
};

export default Logo;
