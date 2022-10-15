import React from 'react';
import {
  FormControl,
  Input,
  Button,
  Box,
  Center,
  Flex,
  VStack,
  Stack,
  Image,
  Text,
} from '@chakra-ui/react';

/* const googleIcon = () => (
  
  <svg 
    version="1.1" id="Capa_1" 
    xmlns="http://www.w3.org/2000/svg" 
    x="0px" y="0px"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    >
    <path fill='#F9DE95' d="M50.4,4.1C25,4.1,4.5,24.6,4.5,50c0,25.3,20.5,45.9,45.9,45.9c25.3,0,45.9-20.5,45.9-45.9
    C96.3,24.6,75.7,4.1,50.4,4.1z M37.9,69.9C26.9,69.9,18,61,18,50c0-11,8.9-19.9,19.9-19.9c5.5,0,10.4,2.2,14,5.7l-4.1,3.5
    c-2.6-2.4-6.1-3.9-9.9-3.9c-8,0-14.5,6.5-14.5,14.5c0,8,6.5,14.5,14.5,14.5c6.1,0,10.7-4,12.2-10.4H37.6l0-5.3h18.5l0,2.1
    C56.2,61.8,48.5,69.9,37.9,69.9z M82.8,53.9h-7.7v7.7h-4.9v-7.7h-7.7V49h7.7v-7.7h4.9V49h7.7V53.9z"
    />
  </svg>
); */

const SignIn = () => {
  return (
    
    <Flex
      position='relative'
      w={{ base:'100%', md:'80%', lg:'60%' }}
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
      <Center color='yellow.100' as="h2" fontSize='20px' fontWeight='600' zIndex={1}>
        Sign In
      </Center>

      <Flex 
        flexDir={{base:'column', md:'row'}}
        align='center'
        w={{base:'80%', md:'90%'}}
        gap={{ base: '12', md:'5' }}
        >

        <Box w={{ base:'100%', md:'50%'}}>
          <form >
            <FormControl justify='space-around' align='center' w='100%' zIndex={1}>
              
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

        
          <Box
            display={{ base:'none', md:'block'}}
            bg='orange.100'
            w={{base:'0', md:'2px'}}
            h={{base:'0', md:'150px'}}
            zIndex={1}
          ></Box>

        <Flex
          w={{ base:'100%', md:'50%'}}
          flexDir='column'
          justify='space-around'
          align='center'
          gap={2}
          zIndex='1'>

          <Center
          display={{base:'block', md:'none'}}
          color='yellow.100' 
          as="h2" 
          fontSize='16px' 
          zIndex={1}>
            Sign In With
          </Center>

          <Stack
            flexDir={{base:'row', md:'column'}}
            align='center'
            justify='space-around' 
            w={{ base:'80%', md:'80%'}}
            gap={4}
          > 
            <Button 
              w='100%' 
              fontSize="lg" 
              bg='yellow.100' 
              display='flex' 
              justify='flex-start'>
              <Image w='30%' src='../assets/images/face_icon.png' /> 
              <Text display={{ base:'none', md:'block'}}w='60%' textAlign='left'>
                with Google
              </Text>
            </Button>

            <Button w='100%' fontSize="lg" bg='yellow.100' >
              <Image w='30%' src='../assets/images/face_icon.png'/> 
              <Text display={{ base:'none', md:'block'}}w='60%' textAlign='left'>
                with Facebook
              </Text>
            </Button>

            <Button w='100%' fontSize="lg" bg='yellow.100'>
              <Image w='30%' src='../assets/images/face_icon.png' /> 
              <Text display={{ base:'none', md:'block'}}w='60%' textAlign='left'>
                with LinkedIn
              </Text>
            </Button>
          </Stack>
        </Flex>
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