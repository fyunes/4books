import React from 'react';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Grid, 
  GridItem,
  Box,
  Center,
} from '@chakra-ui/react';

<Grid
  templateAreas={`
  "nav"
  "main"
  "footer"`
}
  gridTemplateRows={'1fr 4fr 1fr'}
  h='200px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='pink.300' area={'nav'}>
    Nav
  </GridItem>
  <GridItem pl='2' bg='green.300' area={'main'}>
    Main
  </GridItem>
  <GridItem pl='2' bg='blue.300' area={'footer'}>
    Footer
  </GridItem>
</Grid>



const Form = () => {
  return (
    <Box bg='orange.200' w='100%' p={4} color='white'>
      
      <Center h='100px' color='red.900' fontSize='22px' fontWeight='700'>
        Sign up Form
      </Center>
      
      <FormControl>
        <FormLabel color='red.900'>Name-</FormLabel>
        <Input type='text' bg='yellow.100' />
        
        <FormLabel color='red.900'>Username</FormLabel>
        <Input type='text' bg='yellow.100' />

        <FormLabel color='red.900'>Password</FormLabel>
        <Input type='password' bg='yellow.100' />

        <FormLabel color='red.900'>Email address</FormLabel>
        <Input type='email' bg='yellow.100' />          
        <FormHelperText color='gray.600'>We'll never share your email.</FormHelperText>

        <Button colorScheme='teal' variant='outline' bg='yellow.100'>
          Button
        </Button>

      </FormControl>      
    </Box>
  )
};

export default Form;