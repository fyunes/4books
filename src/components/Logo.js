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
          src="../assets/images/logo_colors.png"
          alt="Logo"
        />
      </Box>
      <Box display="flex" alignItems="center">
        <Image
          w={{ base: "170px", sm: "200px", md: "220px" }}
          src="../assets/images/logtipo-4b.mixto.png"
          alt="Name App"
        />
      </Box>
    </Box>
  );
};

export default Logo;
