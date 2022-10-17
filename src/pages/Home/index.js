import { Box, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import HomeCarousel from "../../components/homeCarousel";
import useWindowSize from "../../customHooks/useWindowSize";

const Home = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });

  const size = useWindowSize();
  console.log("size  ", size.width);

  return (
    <Box
      w={{ base: "100%", lg: "70%" }}
      borderWidth={2}
      borderColor="orange.100"
      borderRadius={20}
      py={2}
      my={2}
      bg="maroon.op"
      display="flex"
      alignSelf="center"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color="beige.100"
    >
      {size.width > 600 ? (
        <Flex
          maxW="100%"
          // borderWidth={1}
          // borderColor="red"
          justifyContent="center"
          alignItems="center"
          gap="5"
          mt={2}
          flexDir="column"
        >
          <HomeCarousel />
        </Flex>
      ) : (
        "Something else"
      )}
    </Box>
  );
};

export default Home;
