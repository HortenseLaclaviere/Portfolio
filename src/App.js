
import React from "react";
import Home from "./components/Home";
// import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <main className="h-screen bg-teal-600 ">
      <Home/>
      <Projects/>
      <About/>
     
    </main>
  );
}

export default App;
