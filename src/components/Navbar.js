import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Flex, useDisclosure, Stack, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      px={10}
      py={5}
      gap={5}
      direction={{ base: "column", md: "row" }}
      justifyContent={{ base: "center", md: "space-between" }}
      alignItems={{ base: "center", sm: "center" }}
      bg="maroon.op"
      borderRadius={10}
      borderWidth={2}
      borderColor="orange.100"
    >
      {/* LOGO & TITLE */}

      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        gap={5}
      >
        <Flex flexGrow={1} justify="center">
          <Logo />
        </Flex>
        {isOpen ? (
          <CloseIcon
            onClick={isOpen ? onClose : onOpen}
            display={{ base: "inline", sm: "none" }}
            color="beige.100"
            m={2}
          />
        ) : (
          <HamburgerIcon
            color="beige.100"
            onClick={isOpen ? onClose : onOpen}
            display={{ base: "inline", sm: "none" }}
            m={2}
          />
        )}
      </Flex>

      {/* LINKS */}

      <Flex
        w={{ base: "90%", sm: "100%", md: "60%", lg: "76%" }}
        p={{ base: 1, md: 5 }}
        alignItems={{ base: "center" }}
        direction={{ base: "column", sm: "row" }}
        justifyContent={{ base: "space-between" }}
        gap={{ base: 7 }}
        display={{ base: isOpen ? "flex" : "none", sm: "flex" }}
      >
        <Stack
          spacing={{ base: 1, sm: 5 }}
          direction={{ base: "column", sm: "row" }}
        >
          <Link
            style={{ textDecoration: "none" }}
            variant="outline"
            color="beige.100"
            as={RouterLink}
            to="/"
          >
            <Text
              _hover={{
                bg: "#ecc94b",
                color: "maroon.900",
                borderColor: "#ecc94b",
                transition: ".5s",
              }}
              transition=".3s"
              fontSize="1.3rem"
              py={3}
              px={5}
              borderRadius={10}
              borderWidth={2}
              borderColor="orange.100"
            >
              Home
            </Text>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            color="beige.100"
            as={RouterLink}
            to="/library"
          >
            <Text
              _hover={{
                bg: "#ecc94b",
                color: "maroon.900",
                borderColor: "#ecc94b",
                transition: ".5s",
              }}
              transition=".3s"
              fontSize="1.3rem"
              py={3}
              px={5}
              borderRadius={10}
              borderWidth={2}
              borderColor="orange.100"
            >
              Library
            </Text>
          </Link>
        </Stack>
        <Stack
          spacing={{ base: 1, sm: 7 }}
          direction={{ base: "column", sm: "row" }}
        >
          <Link
            style={{ textDecoration: "none" }}
            color="beige.100"
            as={RouterLink}
            to="/sign-in"
          >
            <Text
              _hover={{
                boxShadow: "0 0 2px 1px #ecc94b",
                bg: "maroon.900",
                color: "#ecc94b",
                transition: ".5s",
              }}
              transition=".3s"
              whiteSpace="nowrap"
              fontSize="1.3rem"
              fontWeight="600"
              py={1}
              px={4}
              bg="#ecc94b"
              color="black"
              borderRadius={10}
            >
              Sign In
            </Text>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            color="beige.100"
            as={RouterLink}
            to="/sign-up"
          >
            <Text
              _hover={{
                boxShadow: "0 0 2px 1px #ecc94b",
                bg: "maroon.900",
                color: "#ecc94b",
                transition: ".5s",
              }}
              transition=".3s"
              whiteSpace="nowrap"
              fontSize="1.3rem"
              fontWeight="600"
              py={1}
              px={4}
              bg="#ecc94b"
              color="maroon.900"
              borderRadius={10}
            >
              Sign Up
            </Text>
          </Link>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default NavBar;
