import React from 'react'
import TitleProjects from '../components/TitleProjects';

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex-center mt-0 section-padding xl:px-0 bg-[#0e1036]  "
    >
      <div className="w-full h-full md:px-20 px-5 ">
        <TitleProjects title={"Projects"} />
        <div class="flex flex-col gap-y-16 ml-100">
          <article class="flex flex-col space-x-0 space-y-8 group  md:flex-row md:space-x-8 md:space-y-0">
            <div class="w-full md:w-1/2">
              <div class="relative flex flex-col items-center mt-10 col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                <img
                  class="object-cover object-top w-full h-56 transition duration-500 sm:h-full  md:scale-110 md:group-hover:scale-105"
                  src="images/FelipeGarcia.jpg"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects