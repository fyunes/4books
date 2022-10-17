import { Box, Image} from "@chakra-ui/react";

const Logo = () => {
  return (
    <Box 
    display="flex" 
    flexDir={{ base:'column', md:'row'}}
    align='center'
    justifyContent='center'
    gap={5}>
      <Box>
        <Image
          borderRadius="full"
          w="100px"
          h='auto'
          src="https://media.discordapp.net/attachments/997992289425182791/1031176706343587840/logo_colors.png?width=468&height=468"
          alt="Logo"
        ></Image>
      </Box>
      <Image        
        w='200px'
        h='auto'
        src="https://media.discordapp.net/attachments/997992289425182791/1031177404992991242/logotipo-4b.mixto.png"
        alt="Name App"
      ></Image>      
    </Box>
  );
};

export default Logo;
