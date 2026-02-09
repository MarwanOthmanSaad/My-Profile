import { useState } from "react";
import Header from "./components/layout/header";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Project from "./page/Project/Project";
import Contact from "./page/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Project />
      <Contact />
    </>
  );
}

export default App;
