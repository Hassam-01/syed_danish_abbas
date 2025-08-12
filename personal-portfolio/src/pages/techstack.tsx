import { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaPython } from "react-icons/fa";
import { 
  SiJavascript, 
  SiTypescript, 
  SiExpress, 
  SiPostgresql, 
  SiMysql,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiRedis,
  SiFlask,
  SiDjango,
  SiFastapi,
  SiNumpy,
  SiPandas,
  SiTensorflow,
  SiPytorch,
  SiJupyter,
  SiDocker,
  SiKubernetes,
  SiGraphql,
  // SiAmazonaws,
  SiGooglecloud,
  // SiAzuredevops,
  SiJenkins,
  SiPostman,
  SiEslint,
  SiPrettier,
  SiWebpack,
  SiBabel,
  SiJest,
  SiCypress,
  SiStorybook,
  SiVercel,
  SiNetlify,
  SiHeroku,
  // SiFigma,
  // SiAdobexd
} from "react-icons/si";
import { DiScrum } from "react-icons/di";

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState<{
    name: string;
    icon: JSX.Element;
    color: string;
    textColor: string;
    description: string;
    category: string;
  } | null>(null);

  const technologies = [
    // Frontend
    {
      name: "React",
      icon: <FaReact className="text-cyan-400" size={50} />,
      color: "from-cyan-400 to-blue-500",
      textColor: "text-cyan-400",
      description: "Building interactive and reusable UI components with React's powerful ecosystem.",
      category: "Frontend"
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-gray-200" size={50} />,
      color: "from-gray-200 to-gray-400",
      textColor: "text-gray-200",
      description: "Server-side rendering and static site generation for React applications.",
      category: "Frontend"
    },
    {
      name: "Redux",
      icon: <SiRedux className="text-purple-400" size={50} />,
      color: "from-purple-400 to-purple-600",
      textColor: "text-purple-400",
      description: "State management for complex JavaScript applications.",
      category: "Frontend"
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-teal-400" size={50} />,
      color: "from-teal-400 to-cyan-500",
      textColor: "text-teal-400",
      description: "Utility-first CSS framework for rapid UI development.",
      category: "Frontend"
    },
    
    // Languages
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" size={50} />,
      color: "from-yellow-300 to-yellow-500",
      textColor: "text-yellow-400",
      description: "Creating dynamic and responsive web applications with JavaScript.",
      category: "Language"
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-500" size={50} />,
      color: "from-blue-500 to-blue-700",
      textColor: "text-blue-500",
      description: "Ensuring type safety and better code quality with TypeScript.",
      category: "Language"
    },
    {
      name: "Python",
      icon: <FaPython className="text-blue-400" size={50} />,
      color: "from-blue-400 to-yellow-500",
      textColor: "text-blue-400",
      description: "Versatile programming language for web development, data analysis, and more.",
      category: "Language"
    },
    
    // Backend
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500" size={50} />,
      color: "from-green-500 to-green-700",
      textColor: "text-green-500",
      description: "Building scalable server-side applications with JavaScript runtime Node.js.",
      category: "Backend"
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-400" size={50} />,
      color: "from-gray-400 to-gray-600",
      textColor: "text-gray-400",
      description: "Creating robust APIs and web applications with Express.js framework.",
      category: "Backend"
    },
    {
      name: "Flask",
      icon: <SiFlask className="text-gray-200" size={50} />,
      color: "from-gray-200 to-gray-400",
      textColor: "text-gray-200",
      description: "Lightweight Python web framework for building APIs and small applications.",
      category: "Backend"
    },
    {
      name: "Django",
      icon: <SiDjango className="text-green-500" size={50} />,
      color: "from-green-500 to-green-700",
      textColor: "text-green-500",
      description: "High-level Python web framework for rapid development and clean design.",
      category: "Backend"
    },
    {
      name: "FastAPI",
      icon: <SiFastapi className="text-teal-400" size={50} />,
      color: "from-teal-400 to-cyan-500",
      textColor: "text-teal-400",
      description: "Modern, fast (high-performance) Python framework for building APIs.",
      category: "Backend"
    },
    {
      name: "GraphQL",
      icon: <SiGraphql className="text-pink-500" size={50} />,
      color: "from-pink-500 to-purple-600",
      textColor: "text-pink-500",
      description: "Query language for APIs and a runtime for executing those queries.",
      category: "Backend"
    },
    
    // Databases
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-blue-600" size={50} />,
      color: "from-blue-600 to-indigo-700",
      textColor: "text-blue-600",
      description: "Managing relational data with PostgreSQL's advanced features and reliability.",
      category: "Database"
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-orange-400" size={50} />,
      color: "from-orange-400 to-orange-600",
      textColor: "text-orange-400",
      description: "Handling structured data with MySQL's performance and flexibility.",
      category: "Database"
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-400" size={50} />,
      color: "from-green-400 to-green-600",
      textColor: "text-green-400",
      description: "NoSQL database for modern applications with flexible data models.",
      category: "Database"
    },
    {
      name: "Redis",
      icon: <SiRedis className="text-red-500" size={50} />,
      color: "from-red-500 to-red-700",
      textColor: "text-red-500",
      description: "In-memory data structure store used as a database, cache, and message broker.",
      category: "Database"
    },
    
    // Data Science
    {
      name: "NumPy",
      icon: <SiNumpy className="text-blue-400" size={50} />,
      color: "from-blue-400 to-indigo-500",
      textColor: "text-blue-400",
      description: "Python library for numerical computing and high-performance array operations.",
      category: "Data Science"
    },
    {
      name: "Pandas",
      icon: <SiPandas className="text-indigo-400" size={50} />,
      color: "from-indigo-400 to-purple-500",
      textColor: "text-indigo-400",
      description: "Python library for data analysis and manipulation.",
      category: "Data Science"
    },
    {
      name: "Jupyter",
      icon: <SiJupyter className="text-orange-500" size={50} />,
      color: "from-orange-500 to-red-600",
      textColor: "text-orange-500",
      description: "Interactive computing environment for writing and running Python code with visualizations.",
      category: "Data Science"
    },
    
    // AI/ML
    {
      name: "TensorFlow",
      icon: <SiTensorflow className="text-orange-500" size={50} />,
      color: "from-orange-500 to-yellow-600",
      textColor: "text-orange-500",
      description: "Open-source machine learning framework for deep learning and AI applications.",
      category: "AI/ML"
    },
    {
      name: "PyTorch",
      icon: <SiPytorch className="text-red-500" size={50} />,
      color: "from-red-500 to-orange-600",
      textColor: "text-red-500",
      description: "Deep learning framework for research and production, known for flexibility and ease of use.",
      category: "AI/ML"
    },
    
    // DevOps & Cloud
    {
      name: "Docker",
      icon: <SiDocker className="text-blue-400" size={50} />,
      color: "from-blue-400 to-blue-600",
      textColor: "text-blue-400",
      description: "Containerization platform for developing, shipping, and running applications.",
      category: "DevOps"
    },
    {
      name: "Kubernetes",
      icon: <SiKubernetes className="text-blue-500" size={50} />,
      color: "from-blue-500 to-blue-700",
      textColor: "text-blue-500",
      description: "Container orchestration system for automating deployment, scaling, and management.",
      category: "DevOps"
    },
    {
      name: "AWS",
      icon: <SiKubernetes className="text-orange-400" size={50} />,
      color: "from-orange-400 to-orange-600",
      textColor: "text-orange-400",
      description: "Cloud computing services for building scalable and reliable applications.",
      category: "Cloud"
    },
    {
      name: "Google Cloud",
      icon: <SiGooglecloud className="text-blue-300" size={50} />,
      color: "from-blue-300 to-blue-500",
      textColor: "text-blue-300",
      description: "Suite of cloud computing services running on Google infrastructure.",
      category: "Cloud"
    },
    {
      name: "Azure",
      icon: <SiKubernetes className="text-blue-500" size={50} />,
      color: "from-blue-500 to-blue-700",
      textColor: "text-blue-500",
      description: "Microsoft's cloud computing platform for building, testing, and managing applications.",
      category: "Cloud"
    },
    
    // Tools
    {
      name: "Git",
      icon: <FaGitAlt className="text-orange-500" size={50} />,
      color: "from-orange-500 to-red-600",
      textColor: "text-orange-500",
      description: "Version control system for tracking changes in source code.",
      category: "Tool"
    },
    {
      name: "Jenkins",
      icon: <SiJenkins className="text-red-400" size={50} />,
      color: "from-red-400 to-red-600",
      textColor: "text-red-400",
      description: "Automation server for CI/CD pipelines.",
      category: "DevOps"
    },
    {
      name: "Postman",
      icon: <SiPostman className="text-orange-500" size={50} />,
      color: "from-orange-500 to-orange-700",
      textColor: "text-orange-500",
      description: "API platform for building and using APIs.",
      category: "Tool"
    },
    {
      name: "ESLint",
      icon: <SiEslint className="text-purple-400" size={50} />,
      color: "from-purple-400 to-purple-600",
      textColor: "text-purple-400",
      description: "Static code analysis tool for identifying problematic patterns in JavaScript.",
      category: "Tool"
    },
    {
      name: "Prettier",
      icon: <SiPrettier className="text-gray-400" size={50} />,
      color: "from-gray-400 to-gray-600",
      textColor: "text-gray-400",
      description: "Code formatter that enforces a consistent style across your codebase.",
      category: "Tool"
    },
    {
      name: "Webpack",
      icon: <SiWebpack className="text-blue-400" size={50} />,
      color: "from-blue-400 to-blue-600",
      textColor: "text-blue-400",
      description: "Module bundler for JavaScript applications.",
      category: "Tool"
    },
    {
      name: "Babel",
      icon: <SiBabel className="text-yellow-400" size={50} />,
      color: "from-yellow-400 to-yellow-600",
      textColor: "text-yellow-400",
      description: "JavaScript compiler that converts modern JavaScript into backwards-compatible versions.",
      category: "Tool"
    },
    {
      name: "Jest",
      icon: <SiJest className="text-red-400" size={50} />,
      color: "from-red-400 to-red-600",
      textColor: "text-red-400",
      description: "JavaScript testing framework with a focus on simplicity.",
      category: "Testing"
    },
    {
      name: "Cypress",
      icon: <SiCypress className="text-gray-200" size={50} />,
      color: "from-gray-200 to-gray-400",
      textColor: "text-gray-200",
      description: "End-to-end testing framework for web applications.",
      category: "Testing"
    },
    {
      name: "Storybook",
      icon: <SiStorybook className="text-pink-500" size={50} />,
      color: "from-pink-500 to-purple-600",
      textColor: "text-pink-500",
      description: "Tool for developing UI components in isolation.",
      category: "Tool"
    },
    {
      name: "Vercel",
      icon: <SiVercel className="text-black" size={50} />,
      color: "from-gray-700 to-black",
      textColor: "text-black",
      description: "Platform for static sites and Serverless Functions.",
      category: "Hosting"
    },
    {
      name: "Netlify",
      icon: <SiNetlify className="text-teal-400" size={50} />,
      color: "from-teal-400 to-teal-600",
      textColor: "text-teal-400",
      description: "Platform for deploying modern web projects.",
      category: "Hosting"
    },
    {
      name: "Heroku",
      icon: <SiHeroku className="text-purple-400" size={50} />,
      color: "from-purple-400 to-purple-600",
      textColor: "text-purple-400",
      description: "Cloud platform for deploying and managing apps.",
      category: "Hosting"
    },
    // {
    //   name: "Figma",
    //   icon: <SiFigma className="text-purple-500" size={50} />,
    //   color: "from-purple-500 to-pink-500",
    //   textColor: "text-purple-500",
    //   description: "Collaborative interface design tool.",
    //   category: "Design"
    // },
    // {
    //   name: "Adobe XD",
    //   icon: <SiAdobexd className="text-pink-500" size={50} />,
    //   color: "from-pink-500 to-purple-600",
    //   textColor: "text-pink-500",
    //   description: "Vector-based design tool for web and mobile apps.",
    //   category: "Design"
    // },
    {
      name: "Scrum",
      icon: <DiScrum className="text-green-500" size={50} />,
      color: "from-green-500 to-green-700",
      textColor: "text-green-500",
      description: "Agile framework for managing complex projects.",
      category: "Methodology"
    }
  ];

  const categories = [
    { name: "All", color: "from-purple-500 to-pink-500" },
    { name: "Frontend", color: "from-blue-400 to-cyan-400" },
    { name: "Backend", color: "from-green-400 to-emerald-400" },
    { name: "Database", color: "from-yellow-400 to-amber-400" },
    { name: "Language", color: "from-red-400 to-orange-400" },
    { name: "Data Science", color: "from-indigo-400 to-purple-400" },
    { name: "AI/ML", color: "from-orange-400 to-red-400" },
    { name: "DevOps", color: "from-blue-500 to-blue-700" },
    { name: "Cloud", color: "from-teal-400 to-cyan-500" },
    { name: "Tool", color: "from-gray-400 to-gray-600" },
    { name: "Testing", color: "from-red-400 to-pink-500" },
    // { name: "Design", color: "from-purple-400 to-pink-400" },
    { name: "Hosting", color: "from-green-300 to-blue-400" },
    { name: "Methodology", color: "from-yellow-500 to-green-500" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTechnologies = selectedCategory === "All" 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

  return (
    <div className="py-8 px-4 sm:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-bold mb-4 text-center text-white">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing digital experiences
          </p>
        </motion.div>

        <motion.div 
          className="h-1 w-full rounded-full bg-gray-800 mb-12"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="h-full w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 rounded-full"></div>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.name}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category.name
                  ? `text-white bg-gradient-to-r ${category.color}`
                  : "text-gray-300 bg-gray-800 hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Tech Description */}
        {hoveredTech && (
          <motion.div 
            className="text-center mb-12 px-6 py-6 rounded-xl mx-auto max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "linear-gradient(145deg, rgba(45, 45, 45, 0.9), rgba(25, 25, 25, 0.9))",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
            }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className={hoveredTech.textColor}>
                {hoveredTech.icon}
              </div>
              <h3 className={`text-3xl font-bold ${hoveredTech.textColor}`}>{hoveredTech.name}</h3>
            </div>
            <p className="text-gray-300 text-lg">{hoveredTech.description}</p>
            <span className="inline-block mt-3 px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300">
              {hoveredTech.category}
            </span>
          </motion.div>
        )}

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center justify-center p-6 rounded-xl cursor-pointer group hover:bg-gray-800 transition-all"
              style={{
                background: "linear-gradient(145deg, rgba(45, 45, 45, 0.8), rgba(25, 25, 25, 0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)"
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.05
              }}
              onMouseEnter={() => setHoveredTech(tech)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className={`${tech.textColor} group-hover:scale-110 transition-transform`}>
                {tech.icon}
              </div>
              <h3 className={`mt-4 font-semibold text-xl ${tech.textColor}`}>{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;