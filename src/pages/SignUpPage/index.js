import { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import Form from "../../components/Form";

const SignUpPage = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });

  return (
    <Flex justify="center" align="center">
      <Form />
    </Flex>
  );
};

export default SignUpPage;

