import { Box, Image } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Box
      display="flex"
      flexDir={{ base: "column", md: "row" }}
      align="center"
      justifyContent="center"
      gap={5}
    >
      <Box>
        <Image
          w={{ base: "80px", sm: "100px", md: "100px" }}
          src="https://media.discordapp.net/attachments/997992289425182791/1031176706343587840/logo_colors.png?width=468&height=468"
          alt="Logo"
        />
      </Box>
      <Box display="flex" alignItems="center">
        <Image
          w={{ base: "170px", sm: "200px", md: "220px" }}
          src="https://media.discordapp.net/attachments/997992289425182791/1031177404992991242/logotipo-4b.mixto.png"
          alt="Name App"
        />
      </Box>
    </Box>
  );
};

export default Logo;
