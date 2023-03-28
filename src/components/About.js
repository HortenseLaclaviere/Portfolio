import { languages } from "../data";

export default function About() {    

    return(

        <section id="about" className="bg-white h-screen">

            <div className="md:absolute md:flex bg-white w-full ">
                <div className="flex flex-col items-center">
                    <div className="relative w-64 h-64 md:w-96 md:h-80 flex items-center ml-5 pt-10">
                        <img src="./Logo/Logo_2.png" alt="Logo Hortense Laclavière" className="absolute" />
                    </div>
                    
                    <div className="pt-4 mt-8 font-dosis md:text-lg">
                        <p className="md:flex items-center text-center"> <img src="./Picto_noirs/picto_pc.jpg" alt="Pictogramme ordinateur" className="w-14 ml-12 md:ml-0 md:mr-2"/> Ada Tech School</p>
                        <p className="md:flex items-center text-center"> <img src="./Picto_noirs/picto_diplome.jpg" alt="Pictogramme diplôme" className="w-14 ml-12 mt-1 md:ml-0 md:mr-2"/>BTS de communication</p>
                        <p className="md:flex items-center text-center"> <img src="./Picto_noirs/picto_cahier.jpg" alt="Pictogramme cahier" className="w-14 ml-12 md:ml-0 md:mr-2"/>Bac STG RH</p>
                    </div>
                    
                    <div>
                        <h1 className="mt-8 text-xl font-marker text-teal-600 mb-4 text-center md:text-start">EXPERIENCES</h1>
                        <div className="font-dosis ml-4 text-center md:text-start pb-8">
                            <h2 className="font-bold">Chargée de projet à L'Oasis Baby Café</h2>
                            <p className="text-teal-500">2017-2022</p>
                            <h2 className="font-bold">Formatrice premiers secours à la Croix-Rouge</h2>
                            <p className="text-teal-500">2016-2017</p>
                        </div>
                    </div>
                
                </div>


                <div className="md:flex md:flex-col  md:w-11/12  md:py-8 ">
                    
                    <div className="items-center text-center">
                        <h1 className="font-bold font-marker text-teal-600 tracking-widest text-4xl"> À <span className="underline underline-offset-8 decoration-dashed">PROPOS</span></h1>
                    </div>
                    
                    <div className=" mt-5 md:mx-20 px-4 md:px-10 text-justify font-dosis text-lg justify-center items-center inline-block ">
                        <p className=" px-4 py-2">Je suis Hortense, apprenante à Ada Tech School depuis octobre 2022 pour devenir développeuse front-end. 
                        Après avoir obtenu un BTS de communication et travaillé 5 ans en tant que chargée de projet dans un café associatif luttant contre l'isolement des jeunes parents, j'ai décidé de faire une reconversion professionnelle dans la programmation. Mon expérience en communication et mon appétence pour les interfaces utilisateur attrayantes m'ont amenée à découvrir ma passion pour le développement web. En parallèle de mes études et de ma carrière, je suis bénévole pour le Tech for Good Tour, afin de sensibiliser le grand public aux enjeux de la technologie. Je fais également du tir à l'arc en club, et j'anime un podcast autour de la pop culture. Pour mettre en pratique mes compétences et continuer à apprendre je suis à la recherche d'une alternance en tant que développeuse front-end à partir de juin 2023.
                        <span className="font-marker border-2 border-teal-600 w-1/2 block mx-auto mt-8"></span></p>
                    </div>

                    <div className="font-dosis text-base 2xl:text-lg md:flex flex-row 2xl:block p-4 2xl:p-1 md:mx-20 px-14 ">
                        <div className="flex flex-col justify-center items-center md:items-start 2xl:items-center">
                            <p className="flex items-center pr-4 pb-2 md:pb-4"> <img src="./Picto_noirs/picto_github.png" alt="Logo Github" className="w-8 2xl:w-12 2xl:mr-8 mr-2"/><a target="_blank" rel="noopener noreferrer" href="https://github.com/HortenseLaclaviere">Mon Github</a></p>
                            <p className="md:flex items-center hidden sm:block"> <img src="./Picto_noirs/picto_adresse.jpg" alt="Logo adresse" className="w-8 2xl:w-12 2xl:mr-8 mr-2"/>Paris</p>                       
                        </div>
                        <div className="flex flex-col justify-center items-center md:items-start 2xl:items-center">                            
                            <p className="flex items-center pr-4 md:pb-4"> <img src="./Picto_noirs/picto_linkedin.jpg" alt="Logo Linkedin" className="w-8 2xl:w-12 2xl:mr-8 mr-2"/> <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hortense-laclavi%C3%A8re-b02654151/">Mon profil Linkedin</a></p>
                            <p className="flex items-center"> <img src="./Picto_noirs/picto_tel.jpg" alt="Logo téléphone" className="w-8 2xl:w-12 2xl:mr-8 mr-2"/>06.76.56.88.86</p>
                        </div>

                        <div className="flex flex-col justify-center items-center md:items-start 2xl:items-center">
                            <p className="flex items-center pr-4 md:pb-4"> <img src="./Picto_noirs/picto_cv.jpg" alt="Logo CV" className="w-7 2xl:w-12 2xl:mr-8 mr-2"/>Mon CV</p>                            
                            <p className="flex items-center pr-4"> <img src="./Picto_noirs/picto_mail.jpg" alt="Logo Mail" className="w-8 2xl:w-12 2xl:mr-8 mr-2"/> hortense.laclaviere@gmail.com</p>

                        </div>
                    </div>

                    

                    <div className="mt-5 md:mx-20 2xl:my-10 text-lg grid grid-cols-5 bg-teal-600 justify-center items-center md:rounded-3xl ">
                        <div className="flex flex-col justify-center col-span-2">

                            <h1 className="font-bold font-marker text-white tracking-widest text-xl text-center -mt-48 md:mt-4 block md:hidden">SOFT-SKILLS</h1>

                            <ul className="font-dosis text-lg text-white text-center md:py-5 pt-20 md:pt-0">
                                <li>Travail d'équipe</li>
                                <li>Esprit de synthèse</li>
                                <li>Organisée</li>
                                <li>Fiable</li>                                
                                
                            </ul>
                            
                            <h1 className="font-bold font-marker text-white tracking-widest text-xl text-center mt-4 hidden sm:block">SOFT-SKILLS</h1>
                            
                        </div>

                        <div className="col-span-1 2xl:my-10">
                        <img src="./Picto_blancs/picto_deco.png" alt="Séparation décorative" className="h-52 mx-auto"/>
                        </div>

                        <div className="col-span-2">
                            <h1 className="font-bold font-marker text-white tracking-widest text-xl text-center mt-2 md:mt-0 md:pt-3 ">HARD-SKILLS</h1>
                            <div className="flex flex-wrap justify-center items-center pt-6 2xl:pt-12 ">

                            { languages.map((language)=>
                                <div>                                    
                                    <div className="pt-4 font-dosis text-white text-center md:text-opacity-0 hover:text-opacity-100 px-1 flex flex-col items-center ">
                                        <img src={language.image} alt={language.alt} className="h-10 mb-1 mx-1 hover:animate-bounce" />
                                        <p className="text-center mb-1">{language.title}</p>
                                    </div>
                                </div>
                                )}
                        
                            </div>

                            

                        </div>
                    </div>
                    
                </div> 


            </div>
        </section>
        
    )
}