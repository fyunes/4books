import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Form from "../../components/Form";

const SignUpPage = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });

  return (
    <Box justifyContent="center" alignItems="center">
      <Form />
    </Box>
  );
};

export default SignUpPage;
