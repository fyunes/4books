import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddBook from "./pages/AddBook";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Library from "./pages/Library";
import theme from "./theme";
import "./styles/styles.css";
import BookEdit from "./components/BookEdit";
import Page404 from "./components/Page404";

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
          <Route path="/" element={<Home title="4Books | Home" />} />
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
          <Route
            path="/edit-book/:id"
            element={<BookEdit title="4Books | Edit book" />}
          />
          <Route
            path="/*"
            element={<Page404 title="4Books | Page not found" />}
          />
        </Routes>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
