import { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import SignInForm from "../../components/SignInForm";

const SignInPage = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });

  return (
    <Flex justify="center" align="center">
      <SignInForm />
    </Flex>
  );
};

export default SignInPage;