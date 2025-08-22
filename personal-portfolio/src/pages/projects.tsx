import { motion } from "framer-motion";
import ProjectCard from "../components/projectCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

function Projects() {
  const projectIds = [
    { projectId: 1 },
    { projectId: 2 },
    { projectId: 3 },
    { projectId: 4 },
    { projectId: 5 },
    { projectId: 6 },
  ];
  const LiveDir = "src/assets/Live/";
  const liveProjects = [
    {
      projectId: 1,
      title: "ZeroCarbon",
      Niche: "Solar Power",
      img: "../assets/images/zerocarbon.jpg",
      liveLink: "https://zerocarbon.com.pk/",
    },
    {
      projectId: 2,
      title: "Sazgar Baic Automobile",
      Niche: "Automobile",
      img: LiveDir + "Automobile-brands-websites/1.jpg",
      liveLink: "https://www.sazgarbaic.com/",
    },
    {
      projectId: 3,
      title: "Loumi Skin Care",
      Niche: "Beauty",
      img: LiveDir + "beauty/1.jpg",
      liveLink: "https://loumiskincare.com/",
    },
    {
      projectId: 4,
      title: "UltraLuxe Skin Care",
      Niche: "Beauty",
      img: LiveDir + "beauty/2.jpg",
      liveLink: "https://ultraluxeskincare.com/",
    },
    {
      projectId: 5,
      title: "Trio Beauty",
      Niche: "Beauty",
      img: LiveDir + "beauty/3.jpg",
      liveLink: "https://triobeauty.com/en-gb",
    },
    {
      projectId: 6,
      title: "MiiSkin",
      Niche: "Beauty",
      img: LiveDir + "beauty/4.jpg",
      liveLink: "https://miiskin.com/",
    },
    {
      projectId: 7,
      title: "University B&AS",
      Niche: "Education",
      img: LiveDir + "educational-websites/1.jpg",
      liveLink: "https://ubas.edu.pk/",
    },
    {
      projectId: 8,
      title: "Step Schools",
      Niche: "Education",
      img: LiveDir + "educational-websites/2.jpg",
      liveLink: "https://stepschools.com/",
    },
    {
      projectId: 9,
      title: "Liberty Trading Fze",
      Niche: "Fintech",
      img: LiveDir + "fintech/1.jpg",
      liveLink: "https://libertytradingfze.com/",
    },
    {
      projectId: 10,
      title: "Country Developers",
      Niche: "Fintech",
      img: LiveDir + "fintech/2.jpg",
      liveLink: "https://countrydevelopers.com.pk/",
    },
    {
      projectId: 11,
      title: "Capital Gurus",
      Niche: "Fintech",
      img: LiveDir + "fintech/4.jpg",
      liveLink: "https://capitalgurus.com/",
    },
    {
      projectId: 12,
      title: "The Model Town Club",
      Niche: "Food",
      img: LiveDir + "food-websites/1.jpg",
      liveLink: "https://modeltownclub.com/",
    },
    {
      projectId: 13,
      title: "The Diamond Oak",
      Niche: "Jewellery",
      img: LiveDir + "jewellery/1.jpg",
      liveLink: "https://thediamondoak.com/",
    },
    {
      projectId: 14,
      title: "Felix.Z",
      Niche: "Jewellery",
      img: LiveDir + "jewellery/2.jpg",
      liveLink: "https://felixz.com/",
    },
  ];
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const handleScroll = (direction: "left" | "right", containerId: string) => {
    const container = document.getElementById(containerId);
    const scrollAmount = 300;
    if (container) {
      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="p-4 my-4">
      <div className="flex flex-col gap-4 md:gap-6">
        <h1 className="font-extrabold text-4xl text-white text-center">
          My Work
        </h1>
        <h2 className="font-bold text-2xl text-white text-center">
          Live Projects
        </h2>

        <div className="relative flex justify-center">
          {/* Scroll Buttons for Large Screens */}
          <div className="hidden md:block">
            <button
              onClick={() => handleScroll("left", "projects-container")}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-3 z-10 hover:bg-opacity-30 transition-all"
            >
              <FaChevronLeft className="text-white text-xl" />
            </button>
            <button
              onClick={() => handleScroll("right", "projects-container")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-3 z-10 hover:bg-opacity-30 transition-all"
            >
              <FaChevronRight className="text-white text-xl" />
            </button>
          </div>

          {/* Scroll Buttons for Small Screens */}
          <div className="md:hidden flex justify-center gap-2 mt-4">
            <button
              onClick={() => handleScroll("left", "projects-container")}
              className="bg-white bg-opacity-20 rounded-full p-3 hover:bg-opacity-30 transition-all"
            >
              <FaChevronLeft className="text-white text-xl" />
            </button>
            <button
              onClick={() => handleScroll("right", "projects-container")}
              className="bg-white bg-opacity-20 rounded-full p-3 hover:bg-opacity-30 transition-all"
            >
              <FaChevronRight className="text-white text-xl" />
            </button>
          </div>

          {/* Projects Container */}
          <div
            id="projects-container"
            className="flex overflow-x-auto gap-6 mt-4 scroll-smooth no-scrollbar md:w-4/5"
            style={{ scrollBehavior: "smooth" }}
          >
            {liveProjects.map((project) => (
              <div key={project.projectId} className="md:min-w-[300px] flex-shrink-0">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-96 w-72 rounded-lg overflow-hidden shadow-lg flex flex-col"
                  style={{
                    perspective: "1000px",
                    background:
                      "linear-gradient(145deg, rgba(45, 45, 45, 0.8), rgba(25, 25, 25, 0.8))",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                  onMouseEnter={() => setHoveredProject(project.projectId)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Image - Larger on mobile */}
                  <div className="h-48 md:h-56 overflow-hidden flex-grow">
                    <motion.img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Hover Overlay - Only for desktop */}
                    <motion.div
                      className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center md:flex hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.projectId ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold shadow-lg"
                        onClick={() => window.open(project.liveLink, "_blank")}
                      >
                        Live Demo
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Project Info - Smaller on mobile */}
                  <div className="p-4 flex flex-col flex-grow-0">
                    <h3 className="text-xl font-bold text-white mb-1 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">{project.Niche}</p>
                    
                    {/* Visible button on mobile */}
                    <div className="md:hidden block mt-auto">
                      <div
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold shadow-lg text-center cursor-pointer hover:opacity-90 transition-opacity duration-300 text-sm"
                        onClick={() => window.open(project.liveLink, "_blank")}
                      >
                        View Project
                      </div>
                    </div>
                    
                    {/* Hidden button on desktop (shown on hover) */}
                    <div className="hidden md:block">
                      <div
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold shadow-lg text-center cursor-pointer hover:opacity-90 transition-opacity duration-300 text-sm opacity-0"
                        style={{ 
                          opacity: hoveredProject === project.projectId ? 1 : 0,
                          transition: 'opacity 0.3s'
                        }}
                        onClick={() => window.open(project.liveLink, "_blank")}
                      >
                        View Project
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="font-bold text-2xl text-white text-center mt-8">
          Other Projects
        </h2>

        <div className="relative flex justify-center">
          {/* Scroll Buttons for Large Screens */}
          <div className="hidden md:block">
            <button
              onClick={() => handleScroll("left", "projects-container-2")}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-3 z-10 hover:bg-opacity-30 transition-all"
            >
              <FaChevronLeft className="text-white text-xl" />
            </button>
            <button
              onClick={() => handleScroll("right", "projects-container-2")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-3 z-10 hover:bg-opacity-30 transition-all"
            >
              <FaChevronRight className="text-white text-xl" />
            </button>
          </div>

          {/* Scroll Buttons for Small Screens */}
          <div className="md:hidden flex justify-center gap-2 mt-4 mr-4">
            <button
              onClick={() => handleScroll("left", "projects-container-2")}
              className="bg-white bg-opacity-20 rounded-full p-3 hover:bg-opacity-30 transition-all"
            >
              <FaChevronLeft className="text-white text-xl" />
            </button>
            <button
              onClick={() => handleScroll("right", "projects-container-2")}
              className="bg-white bg-opacity-20 rounded-full p-3 hover:bg-opacity-30 transition-all"
            >
              <FaChevronRight className="text-white text-xl" />
            </button>
          </div>

          {/* Projects Container */}
          <div
            id="projects-container-2"
            className="flex overflow-x-auto gap-6 mt-4 scroll-smooth no-scrollbar md:w-4/5"
            style={{ scrollBehavior: "smooth" }}
          >
            {projectIds.map(({ projectId }) => (
              <div key={projectId} className="md:min-w-[300px] flex-shrink-0">
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