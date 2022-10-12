import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";

const Home = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });
  return (
    <Flex justifyContent='center' alignItems='center' direction="column" color="beige.100">
      <h1>Home</h1>
    </Flex>
  );
};

export default Home;
