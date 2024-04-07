import { Box, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import useWindowSize from "../customHooks/useWindowSize";
import notFound from "../assets/images/404.png";
import notFoundMobile from "../assets/images/404mobile.png";

const Page404 = ({ title }) => {
  const size = useWindowSize();
  useEffect(() => {
    document.title = title;
  });
  return (
    <Box
      my={3}
      w="100%"
      borderWidth={2}
      borderColor="orange.100"
      borderRadius={10}
      display="flex"
      justifyContent="center"
      bgColor="maroon.op"
    >
      {size.width > 600 ? (
        <Image maxH="700px" src={notFound} />
      ) : (
        <Image maxH="700px" src={notFoundMobile} />
      )}
    </Box>
  );
};

export default Page404;
