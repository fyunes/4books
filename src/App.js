import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddBook from "./pages/AddBook";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/styles.css";
import SignUpForm from "./components/Form";
import SignIn from "./components/SignIn";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home title="Library" />} />
          <Route path="/add-book" element={<AddBook title="Add new book" />} />
          <Route path="/sign-up" element={ <SignUpForm title="Sign Up" /> } />
          <Route path="/sign-in" element={ <SignIn title="Sign In" /> } />
        </Routes>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
