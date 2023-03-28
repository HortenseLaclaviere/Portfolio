
import { projects } from "../data";
import React from "react";



export default function Projects() {

    return (
        <section id="projects" className="text-teal-50 bg-teal-600 text-center font-dosis" >
            <h1 className="font-bold font-marker tracking-widest text-2xl px-3 py-5 ">MES <span className="underline underline-offset-8 decoration-dashed">PROJETS</span> </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 relative inset-0 place-items-center">
                
                {projects.map((project) =>(

                    <a className="relative flex items-center justify-center border-2 h-5/6 w-5/6"
                    href={project.link} target="_blank" rel="noopener noreferrer"                                     
                    >                    
             
                        <div className="flex absolute items-center object-fill z-20 w-full h-full bg-slate-600 bg-opacity-70 md:opacity-0 md:bg-opacity-0 hover:bg-opacity-70 hover:opacity-100 transition-opacity duration-500 px-3">
                            <h1 className="absolute top-5 z-20 lg:top-2 2xl:top-4 text-sm md:text-base 2xl:text-xl font-bold">{project.title}</h1>
                            <h2 className="absolute top-8 md:top-8 2xl:top-12 py-3 md:py-0 z-20 text-sm md:text-base 2xl:text-xl font-bold">{project.subtitle}</h2>   
                            <p className="text-justify text-xs md:text-base 2xl:text-xl mx-auto px-10 md:mt-6">{project.description}</p>
                        </div>
                        <img className="z-10 object-fill w-full h-full "
                        alt={project.alt}
                        src={project.image} 
                            
                        />                        


                    </a>

                ))}
                
                   

            </div>

        </section>


   )

}