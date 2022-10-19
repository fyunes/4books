import { Box, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import useWindowSize from "../customHooks/useWindowSize";
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
        <Image
          maxH="700px"
          src="https://cdn.discordapp.com/attachments/1032221834747318292/1032389464183550035/404.png"
        />
      ) : (
        <Image
          maxH="700px"
          src="https://cdn.discordapp.com/attachments/1032221834747318292/1032394218167095366/404mobile.png"
        />
      )}
    </Box>
  );
};

export default Page404;
