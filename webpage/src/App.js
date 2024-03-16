import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Website/Navigation";
import Footer from "./Website/Footer";
import Home from "./Website/Home";
import Contact from "./Website/Contact";
import ScrollToTopOnIconClick from "./Website/NavabarScroll";
import Jobs from "./Website/JobsPost";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobs" element={<Jobs/>} />
        </Routes>
        <Footer />
        <ScrollToTopOnIconClick />
      </BrowserRouter>
    </div>
  );
};

export default App;
