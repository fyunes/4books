import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddBook from "./pages/AddBook";
import SignUpPage from "./pages/SignUp";
import SignInPage from "./pages/SignIn";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Library from "./pages/Library";
import theme from "./theme";
import "./styles/styles.css";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        direction="column"
        justify="space-between"
        alignContent="center"
        className="App"
        p={3}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home title="Library App" />} />
          <Route
            path="/library"
            element={<Library title="4Books | My library" />}
          />
          <Route
            path="/add-book"
            element={<AddBook title="4Books | Add new book" />}
          />
          <Route
            path="/sign-up"
            element={<SignUpPage title="4Books | Sign Up" />}
          />
          <Route
            path="/sign-in"
            element={<SignInPage title="4Books | Sign In" />}
          />
        </Routes>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
