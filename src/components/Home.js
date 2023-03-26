import Navbar from "./Navbar";

export default function Home() {
    return (
        
            
      <section id="home" className="flex ">
           <div className="absolute z-30 w-full"><Navbar/></div>     
        <div className="relative">
           <img 
                className="w-screen h-screen object-cover object-center hidden sm:block"
                src="./DSC_30583.jpg" 
                alt="" />

            <img 
                className="w-screen h-screen object-cover object-center block md:hidden"
                src="./DSC_3054.jpg" 
                alt="" />
        
            <div className="absolute bottom-20 md:bottom-0 md:right-8 flex justify-end px-8 max-w-xl md:max-w-3xl lg:py-32">
          
                <div className="text-lg border-dashed text-white border-teal-600 border-4 rounded-md bg-slate-500 bg-opacity-70 px-5 py-3 ">
                    <h1 className="md:text-2xl md:mb-4 font-medium font-marker tracking-widest">
                        Hortense Laclavière
                    </h1>
                    <p className="md:mb-8 leading-relaxed font-dosis ">
                        
                    <a className="font-semibold md:text-xl text-right">Apprenante à 
                    <a target="_blank" href="https://adatechschool.fr/" className="underline decoration-dashed underline-offset-8"> Ada Tech School
                    </a>
                    </a>
                    <br/>
                    <br/>Bienvenue sur mon portfolio de développeuse front-end ! Ici, vous trouverez un aperçu de mes compétences et de mes projets en matière de développement web.
                    </p>
                </div>
       
            </div> 
        
        </div>
                
       </section> 
       
   
    );
  }