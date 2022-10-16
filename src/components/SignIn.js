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
  Text,
} from '@chakra-ui/react';

const GoogleIcon = () => (  
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="-2 -2 24 24" preserveAspectRatio="xMinYMin" className="jam jam-google-circle"><path d="M7.188 9.034a2.972 2.972 0 0 0 .028 2.01 2.973 2.973 0 0 0 4.285 1.522 2.98 2.98 0 0 0 1.283-1.522H10.11V9.066h4.803a5.005 5.005 0 0 1-1.783 4.833A5 5 0 1 1 10 5c1.213.001 2.326.433 3.191 1.152l-1.62 1.326a2.974 2.974 0 0 0-4.384 1.557h.001z"/><path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"/></svg>
);
const FacebookIcon = () => (  
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="-2 -2 24 24" preserveAspectRatio="xMinYMin" className="jam jam-facebook-circle"><path d="M8.695 6.937v1.377H7.687v1.683h1.008V15h2.072V9.997h1.39s.131-.807.194-1.69h-1.576v-1.15c0-.173.226-.404.45-.404h1.128V5h-1.535C8.644 5 8.695 6.685 8.695 6.937z"/><path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"/></svg>
);
const LinkedInIcon = () => (  
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="-2 -2 24 24" preserveAspectRatio="xMinYMin" className="jam jam-linkedin-circle"><path d="M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457-.592 0-.945.398-1.1.784-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066 1.41 0 2.468.922 2.468 2.902zM6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115-.014-.632-.465-1.114-1.199-1.114zm-1.086 9.556h2.144V8.38H5.127v6.447z"/><path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"/></svg>
);

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
              <Box w='30%'>
                <GoogleIcon />
              </Box>
              <Text display={{ base:'none', md:'block'}}w='60%' textAlign='left'>
                with Google
              </Text>
            </Button>
            
            <Button 
              w='100%' 
              fontSize="lg" 
              bg='yellow.100' 
              display='flex' 
              justify='flex-start'>
              <Box w='30%'>
                <FacebookIcon />
              </Box>
              <Text display={{ base:'none', md:'block'}}w='60%' textAlign='left'>
                with Facebook
              </Text>
            </Button>

            <Button 
              w='100%' 
              fontSize="lg" 
              bg='yellow.100' 
              display='flex' 
              justify='flex-start'>
              <Box w='30%'>
                <LinkedInIcon />
              </Box>
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