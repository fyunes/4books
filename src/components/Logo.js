import { Box, Image, Img } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Box display="flex" gap={5}>
      <Image
        borderRadius="full"
        boxSize="70px"
        src="https://media.discordapp.net/attachments/997992289425182791/1031176706343587840/logo_colors.png?width=468&height=468"
        alt="Logo"
      ></Image>
      <Img
        w='200px'
        h='auto'
        src="https://media.discordapp.net/attachments/997992289425182791/1031177404992991242/logotipo-4b.mixto.png"
        alt="Name App"
      ></Img>
      {/* <Heading
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
      </Heading> */}
    </Box>
  );
};

export default Logo;
