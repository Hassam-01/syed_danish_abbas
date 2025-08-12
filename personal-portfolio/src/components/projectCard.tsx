import { motion } from "framer-motion";
import { useState } from "react";
import ProjectDialog from "./projectDialog";
import chess01 from "../assets/chess_01.png";
import chess02 from "../assets/chess_02.png";
import chess03 from "../assets/chess_03.png";
import nfrw_01 from "../assets/nfrw_01.png";
import nfrw_02 from "../assets/nfrw_02.png";
// import nfrw_03 from "../assets/nfrw_03.png";
import abd_01 from "../assets/abd_01.png";
import abd_02 from "../assets/abd_02.png";
import abd_03 from "../assets/abd_03.png";
import iot_01 from "../assets/iot_01.png";
import iot_02 from "../assets/iot_02.png";
import iot_03 from "../assets/iot_03.png";
import note_01 from "../assets/notetaking_01.png";
import note_02 from "../assets/notetaking_02.png";

function ProjectCard({ projectId }: { projectId: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const projects = [
    {
      projectId: 1,
      title: "AI Stock Market Bot",
      description:
        "An AI-powered stock market prediction bot that analyzes market trends using Markov models, fuzzy logic, and genetic algorithms to provide trading insights.",
      img: "https://via.placeholder.com/150",
      techStack: [
        "Python",
        "Markov Models",
        "Fuzzy Logic",
        "Genetic Algorithms",
        "Tiingo API",
        "Next.js",
        "Tailwind CSS",
      ],
      liveLink: "https://example.com",
      functionalities: [
        "Predicts stock market trends using AI",
        "Utilizes Markov models for probabilistic forecasting",
        "Incorporates fuzzy logic for decision-making",
        "Optimizes predictions with genetic algorithms",
        "Fetches real-time market data using Tiingo API",
        "Provides interactive visualization of stock trends",
      ],
      images: ["https://via.placeholder.com/150"],
      // githubLink: "https://github.com/Hassam-01/stock_bot_web_client",
      intro:
        "AI stock prediction that gives, buy, sell or hold signals based on the stock market data.",
      details: {
        Date: "November 2024",
        "Associated With":
          "NUST",
        Location: "Islamabad, Pakistan",
        "Role": "Software Engineer",
      },
    },
    {
      projectId: 2,
      title: "Chess Mate AI",
      description:
        "A Java-based chess game with player-vs-player and player-vs-computer modes, featuring strategic computer plays and a friendly UI.",
      img: chess01,
      techStack: [
        "Java",
        "JavaFX",
        "JavaSwing",
        "Scene Builder",
        "Eclipse",
        "IntelliJ",
      ],
      liveLink: "",
      functionalities: [
        "Player vs Player mode",
        "Player vs Computer mode",
        "Friendly UI/UX for smooth gameplay",
        "Computer moves based on points system",
        "Strategic plays such as E4/E5 opening",
        "Computer predicts moves based on player's possible next move",
        "No AI/ML models used",
      ],
      images: [chess02, chess03],
      // githubLink: "https://github.com/Hassam-01/ChessGame",
      intro:
        "A chess game with strategic computer moves, allowing player-vs-player and player-vs-computer gameplay.",
      details: {
        Date: "May 2024",
        "Associated With":
          "NUST",
        Location: "Islamabad, Pakistan",
        Role: "Java Developer",
      },
    },
    {
      projectId: 3,
      title: "NFRW",
      description:
        "NFRW - NUST Fund Raising Website, A web-based platform to facilitate transparent and efficient fundraising for students in need, allowing case management, role-based access control, and real-time case tracking.",
      img: nfrw_01,
      techStack: [
        "React",
        "Tailwind CSS",
        "shadcn/ui",
        "React Hook Form",
        "React Router DOM",
        "React Spinners",
        ".NET Core 8.0 SDK",
        "MS SQL Server",
      ],
      liveLink: "",
      functionalities: [
        "Create and manage fundraising cases",
        "Live status tracking of fundraising campaigns",
        "Role-Based Access Control for different users",
        "Admin dashboard for verifying and managing cases",
        "Comprehensive logging system for tracking actions",
        "Secure donations and case requests",
        "Enhanced manager dashboard for streamlined operations",
      ],
      images: [nfrw_02, nfrw_01],
      // githubLink: "https://github.com/Muhammad-Shah-zaib/FundRaisingServer",
      intro:
        "Fundraising platform enables transparent case management, role-based access, and real-time case tracking to help students in financial need.",
      details: {
        Date: "May 2024",
        "Associated With":
          "NUST",
        Location: "Islamabad, Pakistan",
        Role: "Database Developer",
      },
    },
    {
      projectId: 4,
      title: "NoteKeeping",
      description:
        "A feature-rich note-keeping web app that allows users to take notes, doodle drawings, and collaborate through live meetings in one unified platform.",
      img: note_01,
      techStack: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "React Icons",
        "React Sketch Canvas",
        "ZegoCloud",
        "React Redux Toolkit",
        "Express.js",
        "Node.js",
        "PostgreSQL",
      ],
      liveLink: "",
      functionalities: [
        "Take text-based notes efficiently",
        "Doodle and sketch using a built-in canvas",
        "Collaborate in real-time with video conferencing via ZegoCloud",
        "Seamless state management with Redux Toolkit",
        "Secure and scalable backend powered by Node.js and Express.js",
        "Data persistence using PostgreSQL",
        "User-friendly and responsive design with Tailwind CSS",
      ],
      images: [note_02, note_01],
      // githubLink: "https://github.com/Hassam-01/NoteKeeping",
      intro:
        "A note-keeping web app that lets users jot down notes, sketch drawings, and collaborate via live video meetings, all in one place.",
      details: {
        Date: "July 2024",
        "Associated With": "Personal",
        Location: "Islamabad, Pakistan",
        Role: "Full Stack Developer",
      },
    },
    {
      projectId: 5,
      title: "Portfolio - Abdullah Waqar",
      description:
        "A personal portfolio website showcasing projects, skills, and experience, built with modern web technologies for a fast and interactive user experience.",
      img: abd_01,
      techStack: [
        "React",
        "Vite",
        "Tailwind CSS",
        "React Icons",
        "Flat Icons",
        "EmailJS",
        "React Router DOM",
        "Markdown UI Preview",
        "Wavylink",
        "Vercel",
        "Recraft AI",
        "Redux Toolkit",
      ],
      liveLink: "https://muhammadabdullahwaqar.vercel.app",
      functionalities: [
        "Showcases personal projects and experience",
        "Fast and responsive UI with Vite and Tailwind CSS",
        "Smooth animations using Wavylink",
        "Integrated contact form with EmailJS",
        "Routing between pages using React Router DOM",
        "Markdown support for text formatting",
        "State management using Redux Toolkit",
        "Vector images generated with Recraft AI",
        "Hosted on Vercel for seamless deployment",
      ],
      images: [abd_02, abd_03],
      // githubLink: "https://github.com/Hassam-01/Portfolio-Web",
      intro:
        "A portfolio website for Muhammad Abdullah Waqar, featuring projects, skills, and an interactive UI.",
      details: {
        Date: "July 2024",
        "Associated With": "Client",
        Location: "Islamabad, Pakistan",
        Role: "Full Stack Developer",
      },
    },
    {
      projectId: 6,
      title: "IoT Device Management",
      description:
        "A web-based IoT management system for securely handling smart home sensors, providing real-time data monitoring, security, and alerts.",
      img: iot_01,
      techStack: [
        "React",
        "Vite",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Supabase",
        "JWT",
        "Bcrypt",
      ],
      liveLink: "https://iot-devices-dashboard.vercel.app",
      functionalities: [
        "Real-time sensor data monitoring",
        "Triggers alerts based on optimal sensor values",
        "Secure communication between sub-modules and the main module",
        "Encryption, JWT authentication, and hashing for security",
        "Admin panel with default sub-module password (admin)",
        "Fast and efficient frontend with React and Vite",
        "Backend built with Node.js and Express.js",
        "Database powered by PostgreSQL and Supabase",
      ],
      images: [iot_02, iot_03],
      // githubLink: "https://github.com/Hassam-01/IotFrontend",
      intro:
        "A real-time IoT device management web application for monitoring and securing smart home sensors.",
      details: {
        Date: "November 2024",
        "Associated With":
          "NUST",
        Location: "Islamabad, Pakistan",
        Role: "Full Stack Developer",
      },
    },
  ];

  const project = projects[projectId - 1];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const getRandomColor = () => {
    const colors = [
      "bg-blue-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative h-96 w-72 rounded-lg overflow-hidden shadow-lg"
      style={{
        perspective: "1000px",
        background:
          "linear-gradient(145deg, rgba(45, 45, 45, 0.8), rgba(25, 25, 25, 0.8))",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
      onClick={handleFlip}
    >
      {/* Front of the Card */}
      <motion.div
        className="absolute w-full h-full p-4 flex flex-col justify-between gap-2"
        style={{ backfaceVisibility: "hidden" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-center">
          {project.title}
        </h1>
        <img
          src={project.img}
          alt="project image"
          className="h-2/5 w-full object-cover rounded-lg border border-gray-700"
        />
        <p className="text-md text-gray-300 text-center">{project.intro}</p>
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-1 text-white font-semibold"
            onClick={(e) => {
              e.stopPropagation(); // Prevent flip when clicking the button
              handleExpand();
            }}
          >
            {isExpanded ? "Collapse" : "Expand"}
          </motion.button>
        </div>
      </motion.div>

      {/* Back of the Card (Tech Stack) */}
      <motion.div
        className="absolute w-full h-full p-4 flex flex-col items-center"
        style={{ backfaceVisibility: "hidden", rotateY: 180 }}
        animate={{ rotateY: isFlipped ? 0 : 180 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
          Project Details
        </h2>
        <ul className="text-gray-300 text-center space-y-4 flex flex-col justify-center py-2 h-full">
          {Object.entries(project.details).map(([key, value], index) => (
            <li key={index} className="flex justify-between gap-4">
              <span className="font-semibold text-cyan-400 text-start">{key}:</span>
              <span className= {`${getRandomColor()} font-semibold text-gray-200 text-start px-3 py-1 rounded-full text-sm`}>{value}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Expanded Details */}
      {isExpanded && <ProjectDialog project={project} onClose={handleExpand} />}
    </motion.div>
  );
}

export default ProjectCard;
