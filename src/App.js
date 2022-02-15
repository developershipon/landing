import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import AboutPage from "./pages/AboutPage";
import TestimonialPage from "./pages/TestimonialPage";
import OurTeamPage from "./pages/OurTeamPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./componants/nav/Nav";
import ScrollToTop from "./componants/ScrollToTop";

function App() {
  useEffect(() => {
    Aos.init({
      offset: 150,
      duration: 1000,
      delay: 50,
      once: true,
      easing: "ease-in-out",
    });
  });
  return (
    <Router>
      <div className="App bg-blue-100">
        <Navbar />
        <HomePage />
        <FeaturesPage />
        <AboutPage />
        <TestimonialPage />
        <OurTeamPage />
        <BlogPage />
        <ContactPage />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
