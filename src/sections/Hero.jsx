import React from "react";
import gsap from "gsap";
import {useGSAP} from '@gsap/react'
import AnimatedCounter from "../components/HeroModels/AnimatedCounter";
import BotonWork from "../components/BotonWork/BotonWork";


const Hero = () => {

  useGSAP(()=>{
    gsap.fromTo('.hero-text h1',{
      y:50,
      opacity:0,
    }
    ,{
      y:0,
      opacity:1,
      duration:1,
      stagger:0.2,
      ease:'power2.inOut',
    })
  })
   return (
     <section id="hero" className="relative overflow-hidden  bg-[#0e1036]">
       <div className="hero-layout  ">
         {/* LEFT: Hero Content */}
         <header className="flex flex-col justify-center md:w-full   section py-16 md:py-12 scroll-m-10 w-full mx-auto container lg:max-w-5xl md:max-w-2xl ">
           <div className="flex flex-col gap-7">
             <div className="hero-text  ">
               <div class="flex gap-4 mb-4">
                 <img
                   class="rounded-full shadow-lg size-38"
                   src="images/FelipeGarcia.jpg"
                   alt="Felipe Garcia"
                 />
                 <BotonWork/>
                
                 
               </div>
               <h1 className="font-sans-serif font-weight: bold ">
                 Hey, I'm Felipe Garcia!
               </h1>
             </div>
             <p className=" [&>strong]:text-yellow-200  text-white-50 md:text-xl relative z-10 pointer-events-none font-sans-serif">
               <strong> Sofware Developer</strong>
               <p>Graduate in Technician programming.</p>
             </p>
             <nav className="flex gap-4">
               <a
                 target="_blank"
                 href="https://www.linkedin.com/in/garciafelipe1/"
                 role="link"
                 class="inline-flex bg-gray-100 text-gray-800 border-gray-300 items-center justify-center gap-2 px-3 py-2 space-x-2 text-base transition dark:text-white dark:bg-gray-800 border dark:border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
               >
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   class="icon icon-tabler icon-tabler-brand-linkedin"
                   width="24"
                   height="24"
                   viewBox="0 0 24 24"
                   stroke-width="2"
                   stroke="currentColor"
                   fill="none"
                   stroke-linecap="round"
                   stroke-linejoin="round"
                 >
                   <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                   <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                   <path d="M8 11l0 5" />
                   <path d="M8 8l0 .01" />
                   <path d="M12 16l0 -5" />
                   <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                 </svg>
                 Linkedin
               </a>
               <a
                 target="_blank"
                 href="mailto:feli2003garcia@gmail.com"
                 role="link"
                 class="inline-flex bg-gray-100 text-gray-800 border-gray-300 items-center justify-center gap-2 px-3 py-2 space-x-2 text-base transition dark:text-white dark:bg-gray-800 border dark:border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
               >
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   class="icon icon-tabler icon-tabler-mail-forward"
                   width="24"
                   height="24"
                   viewBox="0 0 24 24"
                   stroke-width="2"
                   stroke="currentColor"
                   fill="none"
                   stroke-linecap="round"
                   stroke-linejoin="round"
                 >
                   <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                   <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
                   <path d="M3 6l9 6l9 -6" />
                   <path d="M15 18h6" />
                   <path d="M18 15l3 3l-3 3" />
                 </svg>
                 Contactame!
               </a>
             </nav>
           </div>
         </header>

         <figure>
           <div className="hero-3d-layout border-red-200  "></div>
         </figure>
       </div>
       
     </section>
   );
};

export default Hero;
