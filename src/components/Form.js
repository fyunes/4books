import React from "react";
import {
  FormControl,
  Input,
  Button,
  Box,
  Center,
  Flex,
  VStack,
} from '@chakra-ui/react';



const Form = () => {
  return (
    
    <Flex
      position='relative'
      w="90%"
      borderWidth={2}
      borderColor="orange.100"
      borderRadius={10}
      flexDir='column'
      justify="center"
      align="center"
      wrap="wrap"
      gap={5}      
      py={9}
      my={5}
      mx={3}
    >
      <Center color='yellow.100' fontSize='22px' fontWeight='700' zIndex={1}>
        Sign up Form
      </Center>
      
      <form >
        <FormControl w='100%' dispay='flex' flexDirection='column' justify='center' align="center" zIndex={1} >
          
          <VStack dispay='flex' flexDirection='column' justify='center' align="center" gap={4}>
            <Input type='text' color="beige.100" bgColor="maroon.op" focusBorderColor="beige.100" borderColor="orange.100" _placeholder={{ color: "yellow.100" }} placeholder="Name" />          
            
            <Input type='text' color="beige.100" bgColor="maroon.op" focusBorderColor="beige.100" borderColor="orange.100" _placeholder={{ color: "yellow.100" }} placeholder="Username" />
            
            <Input type='password' color="beige.100" bgColor="maroon.op" focusBorderColor="beige.100" borderColor="orange.100" _placeholder={{ color: "yellow.100" }} placeholder="Password" />
            
            <Input type='email' color="beige.100" bgColor="maroon.op" focusBorderColor="beige.100" borderColor="orange.100" _placeholder={{ color: "yellow.100" }} placeholder="Email" /> 
            
            <Button fontSize="lg" colorScheme="yellow">
              Sign Up
            </Button>
          </VStack>

        </FormControl>
      </form>

      <Box
        w='100%'
        h='100%'
        bg='maroon.op'
        borderRadius={10}
        position='absolute'
        zIndex={0}
      ></Box>
    </Flex>
  )
};

export default Form;
