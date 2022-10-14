import React from 'react';
import {
  FormControl,
  Input,
  Button,
  Box,
  Center,
  Flex,
  VStack,
  Icon,
  Img,
  Image,
} from '@chakra-ui/react';



const SignIn = () => {
  return (
    
    <Flex
      position='relative'
      w={{ base:'100%', sm:'60%', lg:'40%' }}
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
    >
      <Center color='yellow.100' fontSize='22px' fontWeight='700' zIndex={1}>
        Sign In
      </Center>
      <Box w='90%'>
        <form >
          <FormControl align='center' w='100%' zIndex={1}>
            
            <VStack w='80%' dispay='flex' flexDirection='column' justify='center' align="center" gap={4}>

              <Input id='email' type='email' color="beige.100" bgColor="maroon.op" focusBorderColor="beige.100" borderColor="orange.100" _placeholder={{ color: "yellow.100" }} placeholder="Email" />
              
              <Input id='password' type='password' color="beige.100" bgColor="maroon.op" focusBorderColor="beige.100" borderColor="orange.100" _placeholder={{ color: "yellow.100" }} placeholder="Password" />
                
              <Button fontSize="lg" colorScheme="yellow">
                Sign In
              </Button>
            </VStack>

          </FormControl>
        </form>
      </Box>

      <Flex w='100%' justify='center'>
        <Img w='30px' h='30px' src='../assets/images/google_icon.svg' alt='google icon' />
        <Image src='../assets/images/linkedin_icon.svg' alt='linkedin icon' />
        <Icon src='../assets/images/face_icon.png' alt='facebook icon' />
      </Flex>

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

export default SignIn;