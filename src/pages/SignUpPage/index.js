import { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import SignUpForm from "../../components/SignUpForm";

const SignUpPage = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });

  return (
    <Flex justify="center" align="center">
      <SignUpForm />
    </Flex>
  );
};

export default SignUpPage;

