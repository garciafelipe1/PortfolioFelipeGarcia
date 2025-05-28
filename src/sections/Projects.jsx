import React from "react";
import TitleProjects from "../components/TitleProjects";
import YourSVG from "../components/BotonWork/nextboton"; // Assuming YourSVG.tsx is in the components folder

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex-center mt-0 section-padding xl:px-0 bg-[#0e1036]"
    >
      <div className="w-full h-full md:px-20 px-5 flex md:flex-row md:items-start gap-8">
        <div className="md:w-1/5 lg:w-1/6">
          <TitleProjects title={"Proyectos"} />
        </div>
        <div className="mt-16 flex-1 flex flex-col gap-4">
          {/* Project 1 */}
          <div className="bg-[#191d49] rounded-xl overflow-hidden shadow-lg md:flex max-w-xl">
            <img
              src="https://www.florespedia.com/Imagenes/flores-bonitas.jpg"
              alt="Beautiful Flowers Project"
              className="w-full h-auto object-cover md:w-1/2 rounded-l-xl md:rounded-tr-none md:rounded-bl-xl"
            />
            <div className="p-4 flex flex-col justify-between md:w-1/2">
              <div>
                <h3 className="text-lg font-bold mb-1 text-white">
                  Beautiful Flowers
                </h3>
                <div className="flex gap-1 mb-1">
                  <span className="inline-flex items-center bg-black text-[0.7rem] rounded-full px-1 py-0.5 text-white">
                    <YourSVG className="w-3 h-3 mr-0.5" 
                     />{" "}
                    {/* Inserted the SVG here */}
                    NextJS
                  </span>
                  <span className="inline-flex items-center bg-[#292e63] text-[0.7rem] rounded-full px-1 py-0.5 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3 mr-0.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                      />
                    </svg>
                    Nature
                  </span>
                </div>
                <p className="text-xs opacity-80 text-white mb-2">
                  A showcase of beautiful flowers from around the world. Built
                  with React for a dynamic user experience.
                </p>
              </div>
              <div className="flex gap-1">
                <a
                  href="#"
                  className="inline-flex items-center bg-[#292e63] text-white rounded-lg py-1 px-2 hover:bg-[#383e7a] text-xs"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 4.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Code
                </a>
                <a
                  href="#"
                  className="inline-flex items-center bg-[#292e63] text-white rounded-lg py-1 px-2 hover:bg-[#383e7a] text-xs"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mr-1"
                  >
                    <path d="M3 8.25V15.75a3 3 0 003 3h12a3 3 0 003-3V8.25a3 3 0 00-3-3H6a3 3 0 00-3 3zM12 10.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  Preview
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 - AI Code Assistant */}
          <div className="bg-[#191d49] rounded-xl overflow-hidden shadow-lg md:flex max-w-xl">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXxlbnwwfHwwfHwwfDA&auto=format&fit=crop&w=800&q=60"
              alt="AI Code Assistant Project"
              className="w-full h-auto object-cover md:w-1/2 rounded-l-xl md:rounded-tr-none md:rounded-bl-xl"
            />
            <div className="p-4 flex flex-col justify-between md:w-1/2">
              <div>
                <h3 className="text-lg font-bold mb-1 text-white">
                  AI Code Assistant
                </h3>
                <div className="flex gap-1 mb-1">
                  <span className="inline-flex items-center bg-[#292e63] text-[0.7rem] rounded-full px-1 py-0.5 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3 mr-0.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V18H8.25v-7.5M16.5 10.5a3 3 0 10-6 0m6 0L8.25 18"
                      />
                    </svg>
                    Python
                  </span>
                  <span className="inline-flex items-center bg-[#292e63] text-[0.7rem] rounded-full px-1 py-0.5 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3 mr-0.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 4.5m0 0l-4.5-4.5m4.5 4.5l4.5 4.5m-9-9l9 9"
                      />
                    </svg>
                    AI
                  </span>
                </div>
                <p className="text-xs opacity-80 text-white mb-2">
                  An AI-powered assistant that helps developers write and debug
                  code more efficiently. Built using Python and machine learning
                  models.
                </p>
              </div>
              <div className="flex gap-1">
                <a
                  href="#"
                  className="inline-flex items-center bg-[#292e63] text-white rounded-lg py-1 px-2 hover:bg-[#383e7a] text-xs"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 4.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Code
                </a>
                <a
                  href="#"
                  className="inline-flex items-center bg-[#292e63] text-white rounded-lg py-1 px-2 hover:bg-[#383e7a] text-xs"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mr-1"
                  >
                    <path d="M3 8.25V15.75a3 3 0 003 3h12a3 3 0 003-3V8.25a3 3 0 00-3-3H6a3 3 0 00-3 3zM12 10.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  Preview
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
