// import { useState } from "react";
import ProjectCard from "../components/projectCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons

function Projects() {
  const projectIds = [
    { projectId: 1 },
    { projectId: 2 },
    { projectId: 3 },
    { projectId: 4 },
    { projectId: 5 },
    { projectId: 6 },
  ];

  // const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction: string) => {
    const container = document.getElementById("projects-container");
    const scrollAmount = 300; // Adjust scroll amount as needed
    if (container) {
      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
      // setScrollPosition(container.scrollLeft);
    }
  };

  return (
    <div className="p-4 my-4">
      <div className="flex flex-col gap-4 md:gap-6">
        <h1 className="font-extrabold text-4xl text-white text-center">
          My Work
        </h1>
        <div className="relative flex justify-center ">
          {/* Scroll Buttons for Large Screens */}
          <div className="hidden md:block">
            <button
              onClick={() => handleScroll("left")}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-3 z-10 hover:bg-opacity-30 transition-all"
            >
              <FaChevronLeft className="text-white text-xl" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-3 z-10 hover:bg-opacity-30 transition-all"
            >
              <FaChevronRight className="text-white text-xl" />
            </button>
          </div>

          {/* Projects Container */}
          <div
            id="projects-container"
            className=" flex overflow-x-auto gap-6 mt-4 scroll-smooth no-scrollbar md:w-4/5"
            style={{ scrollBehavior: "smooth" }}
          >
            {projectIds.map(({ projectId }) => (
              <div key={projectId} className="md:min-w-[300px]">
                <ProjectCard projectId={projectId} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;