import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Link,
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Image,
  Heading,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const Logo = () => {
  return (
    <Box display="flex">
      <Image
        borderRadius="full"
        boxSize="100px"
        src="favicon.ico"
        alt="Logo"
      ></Image>
      <Heading
      fontFamily="Barlow Condensed"
        textAlign="center"
        marginLeft="10%"
        p="8%"
        w="250px"
        color="beige.100"
        border="1px #de834d solid"
        borderRadius="25px"
      >
        4Books
      </Heading>
    </Box>
  );
};

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box
      display={{ base: "block", md: "none" }}
      marginTop={[4, 4, 0, 0]}
      onClick={toggle}
    >
      {isOpen ? (
        <CloseIcon color="beige.100" />
      ) : (
        <HamburgerIcon color="beige.100" />
      )}
    </Box>
  );
};

const MenuItem = ({ children, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
      marginTop={[0, 0, 5, 3]}
    >
      <Stack
        spacing={5}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "column", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem>
          <Link as={NavLink} to="/">
            <Button
              fontSize="1.2rem"
              size="md"
              w="160px"
              rounded="md"
              colorScheme="navbar"
              variant="outline"
              _active={{
                bg: "orange.900",
                borderColor: "orange.900",
              }}
            >
              Home
            </Button>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link as={NavLink} to="/library">
            <Button
              fontSize="1.2rem"
              size="md"
              w="160px"
              rounded="md"
              colorScheme="navbar"
              variant="outline"
              _active={{
                bg: "orange.900",
                borderColor: "orange.900",
              }}
            >
              Library
            </Button>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link as={NavLink} to="/sign-in">
            <Button
              fontSize="1.2rem"
              size="md"
              w="160px"
              rounded="md"
              color="maroon.900"
              colorScheme="sign"
              _active={{
                bg: "orange.300",
                borderColor: "orange.300",
              }}
            >
              Sing in
            </Button>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link as={NavLink} to="/sign-up">
            <Button
              fontSize="1.2rem"
              size="md"
              w="160px"
              rounded="md"
              color="maroon.900"
              colorScheme="sign"
              _active={{
                bg: "orange.300",
                borderColor: "orange.300",
              }}
            >
              Sing up
            </Button>
          </Link>
        </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify={["center", "center", "space-between", "space-between"]}
      wrap="wrap"
      w="95%"
      mb={8}
      p={8}
      bg="rgb(89, 53, 29, 0.5)"
      m="2%"
      border="1px #de834d solid"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;