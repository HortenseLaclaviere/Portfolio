
import React from "react";
import Home from "./components/Home";
// import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import PageProject from "./components/PageProject";
import { Routes, Route } from "react-router-dom";

function HomeRoute() {
  return (
    <div>
      <Home />
      <Projects />
      <About />
    </div>
  );
}

function App() {
  return (
        
  <main className="h-screen bg-teal-600 ">
    
    <Routes>
      <Route path="/" element={<HomeRoute/>}/>      
      <Route path="/PageProjects" element={<PageProject/>}/>      
    </Routes>       
    
  </main>    
    
  );
}

export default App;
