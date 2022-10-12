import React from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Box,
  Center,
} from "@chakra-ui/react";

const Form = () => {
  return (
    <Box
      // bgColor="maroon.op"
      // borderWidth={2}
      // borderRadius={10}
      // borderColor="orange.100"
      // w={{base: "90%", md:'50%'}}
      p={4}
      color="white"
      align="center"
    >
      <Center h="100px" color="white" fontSize="22px" fontWeight="700">
        Sign up Form
      </Center>

      <form>
        <FormControl w="80%" align="center">
          <FormLabel color="white" mt="15px">
            Name
          </FormLabel>
          <Input type="text" bg="yellow.100" />

          <FormLabel color="white" mt="15px">
            Username
          </FormLabel>
          <Input type="text" bg="yellow.100" />

          <FormLabel color="white" mt="15px">
            Password
          </FormLabel>
          <Input type="password" bg="yellow.100" />

          <FormLabel color="white" mt="15px">
            Email address
          </FormLabel>
          <Input type="email" bg="yellow.100" />
          <FormHelperText color="gray.300">
            We'll never share your email.
          </FormHelperText>

          <Button
            colorScheme="orange"
            variant="outline"
            bg="yellow.100"
            mt="15px"
          >
            Button
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default Form;
