import { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import SignIn from "../../components/SignIn";

const SignInPage = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });

  return (
    <Flex justify="center" align="center">
      <SignIn />
    </Flex>
  );
};

export default SignInPage;