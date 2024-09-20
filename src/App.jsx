import { useEffect } from "react";
import io from "socket.io-client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Contact, Home, Login, Register } from "./pages";
import HeaderNavigation from "./layouts/header-navigation";

const END_POINT = "http://localhost:8080";
var socket;

const App = () => {
  useEffect(() => {
    socket = io(END_POINT);
  }, []);

  return (
    <Router>
      <Routes>
        <HeaderNavigation />
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/register" element={<Register />} exact />
      </Routes>
    </Router>
  );
};

export default App;
