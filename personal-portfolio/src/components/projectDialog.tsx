import { Dialog } from "@headlessui/react";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa"; // Importing icons from react-icons

interface Project {
  projectId: number;
  title: string;
  description: string;
  images: string[]; // Array of image URLs
  techStack: string[]; // Array of technologies used
  functionalities: string[]; // Array of functionalities
  // githubLink: string; // GitHub repository link
  liveLink: string; // Live project link
  intro:string;
}

interface ProjectDialogProps {
  project: Project;
  onClose: () => void;
}

const ProjectDialog = ({ project, onClose }: ProjectDialogProps) => {
  // Function to generate a random color for tech stack tags
  const getRandomColor = () => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <Dialog
      open={true}
      onClose={onClose}
      className=" fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 md:p-4 p-2 "
    >
      <div className="bg-dark md:p-6 p-10 rounded shadow-lg max-w-2xl w-full overflow-y-auto max-h-screen no-scrollbar bg-black relative ">
        {/* Close Button (Red Cross Icon at Top Right) */}
        <button
          onClick={onClose}
          className="absolute top-11 md:top-8 right-4 text-red-500 hover:text-red-600 transition-all"
        >
          <FaTimes size={24} />
        </button>

        <h2 className="text-white text-2xl mb-4 font-bold text-center">{project.title}</h2>

        {/* Project Images */}
        {project.images.length > 0 && (
          <div className="mb-4 md:mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Project ${project.title} Image ${index + 1}`}
                  className="rounded-lg object-cover w-full h-48"
                />
              ))}
            </div>
          </div>
        )}

        {/* Project Description */}
        <p className="text-white mb-4">{project.description}</p>

        {/* Tech Stack */}
        <div className="mb-4">
          <h3 className="text-white text-xl font-semibold mb-2">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.length > 0 &&
              project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className={`${getRandomColor()} text-white px-3 py-1 rounded-full text-sm`}
                >
                  {tech}
                </span>
              ))}
          </div>
        </div>

        {/* Functionalities */}
        <div className="mb-4">
          <h3 className="text-white text-xl font-semibold mb-2">
            Functionalities
          </h3>
          <ul className="list-disc list-inside text-white">
            {project.functionalities.length > 0 &&
              project.functionalities.map((func, index) => (
                <li key={index}>{func}</li>
              ))}
          </ul>
        </div>

        {/* GitHub and Live Links */}
        <div className="flex gap-4">
          {/* {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-white text-dark px-4 py-2 rounded hover:bg-opacity-80 transition-all flex items-center gap-2"
            >
              <FaGithub size={20} /> GitHub
            </a>
          )} */}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-white text-dark px-4 py-2 rounded hover:bg-opacity-80 transition-all flex items-center gap-2"
            >
              <FaExternalLinkAlt size={18} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </Dialog>
  );
};

export default ProjectDialog;