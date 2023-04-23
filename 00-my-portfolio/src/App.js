import React, { useState } from "react";
import ResponsiveAppBar from "./components/Navitas";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import "./components/Footer.css";
import "./App.css";

function App() {
  let [currentPage, setCurrentPage] = useState("");
  return (
    <div className="App">
      <ResponsiveAppBar setCurrentPage={setCurrentPage}></ResponsiveAppBar>

      {currentPage === "About Me" || currentPage === "" ? <AboutMe /> : ""}
      {currentPage === "Portfolio" ? <Portfolio /> : ""}
      {currentPage === "Contact" ? <Contact /> : ""}
      {currentPage === "Resume" ? <Resume /> : ""}

      <footer>
      
        <Footer />
      </footer>
    </div>
  );
}

export default App;
