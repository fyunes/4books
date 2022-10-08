import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddBook from "./pages/AddBook";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/styles.css";
import SignUpPage from "./components/Form";
import SignInPage from "./components/SignIn";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home title="Library" />} />
          <Route path="/add-book" element={<AddBook title="Add new book" />} />
          <Route path="/sign-up" element={ <SignUpPage title="Sign Up" /> } />
          <Route path="/sign-in" element={ <SignInPage title="Sign In" /> } />
        </Routes>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
