import React from "react";

export default function Navbar() {

    return(
        <section id="navbar" className="z-30 h-10 md:h-8 relative">
        <div className="absolute flex items-center bg-teal-600 text-white w-full h-full">
          <div className="flex items-center ml-3 md:ml-8 ">
            <img className="h-8" src="./Logo/Logo.png" alt="Logo Hortense Laclavière" />
          </div>
          <div className="mx-auto font-dosis tracking-widest">
            <a className="inline-block hover:underline decoration-dashed underline-offset-4 text-base md:text-lg my-4 px-2 md:my-2 md:px-10" href="#projects">
              Projets
            </a>
            <a className="inline-block hover:underline decoration-dashed underline-offset-4 text-base md:text-lg my-4 px-2 md:my-2 md:px-10" href="#about">
            À propos
            </a>
            <a className="inline-block hover:underline decoration-dashed underline-offset-4 text-base md:text-lg my-4 px-5 md:my-2 md:px-10" target="_blank" rel="noopener noreferrer" href="mailto:hortense.laclaviere@gmail.com">
              Contact
            </a>
          </div>
        </div>
      </section>
      
    
    );
}