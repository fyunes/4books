import { Box, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import HomeCarousel from "../../components/homeCarousel";

const Home = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });
  return (
    <Box
      w="80%"
      borderWidth={2}
      borderColor="orange.100"
      borderRadius={20}
      py={2}
      my={2}
      bg='maroon.op'
      display="flex"
      alignSelf='center'
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color="beige.100"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        gap='120'
        flexDir="column"
      >
        <HomeCarousel />
      </Flex>
    </Box>
  );
};

export default Home;
