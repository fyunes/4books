import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";

const Home = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });
  return (
    <Flex direction="column" color="beige.100">
      Home
    </Flex>
  );
};

export default Home;
