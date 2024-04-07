import { Box, Image } from "@chakra-ui/react";

import logo from "../assets/images/logo_colors.png";
import logo2 from "../assets/images/logotipo-4b-mixto.png";

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
          src={logo}
          alt="Logo"
        />
      </Box>
      <Box display="flex" alignItems="center">
        <Image
          w={{ base: "170px", sm: "200px", md: "220px" }}
          src={logo2}
          alt="Name App"
        />
      </Box>
    </Box>
  );
};

export default Logo;
