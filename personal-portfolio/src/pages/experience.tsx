import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaCode } from "react-icons/fa";
import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiRedis,
  SiMysql,
  SiPython,
  SiDjango,
  SiFlask,
  SiFastapi,
} from "react-icons/si";
import { IoLocation } from "react-icons/io5";

const Experience = () => {
  return (
    <div className="py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-300">
            My journey in software development
          </p>
        </motion.div>

        {/* Timeline Bar */}
        <motion.div
          className="h-1 w-full rounded-full mb-12"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="h-full w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 rounded-full"></div>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 p-6 rounded-xl shadow-lg"
          style={{
            background:
              "linear-gradient(145deg, rgba(45, 45, 45, 0.8), rgba(25, 25, 25, 0.8))",
          }}
        >
          <div className="flex flex-col md:flex-row gap-6">
            {/* Icon */}
            <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full">
              <FaBriefcase className="text-blue-400 text-2xl" />
            </div>

            {/* Experience Details */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-white">
                  Over 5 Years of Experience in Development
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <FaCalendarAlt />
                  <span>2019 - Present</span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs text-gray-400 mb-4">
                <IoLocation className="text-gray-500" />
                <span>Remote & On-Site Projects</span>
              </div>

              {/* Responsibilities */}
              <div className="mb-4">
                <h5 className="flex items-center gap-2 font-medium text-gray-300 mb-2">
                  <FaCode className="text-cyan-400" />
                  Key Responsibilities & Achievements
                </h5>
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                  <li>
                    Delivered high-quality software solutions across frontend, backend, and database layers.
                  </li>
                  <li>
                    Designed and implemented responsive, user-friendly interfaces.
                  </li>
                  <li>
                    Developed RESTful APIs, backend services, and real-time systems.
                  </li>
                  <li>
                    Managed relational & non-relational databases with performance optimization.
                  </li>
                  <li>
                    Collaborated with diverse teams to deploy production-ready applications.
                  </li>
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h5 className="flex items-center gap-2 font-medium text-gray-300 mb-2">
                  <FaCode className="text-purple-400" />
                  Technologies Used
                </h5>
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: <SiTypescript className="text-blue-400" size={20} />, name: "TypeScript" },
                    { icon: <SiReact className="text-cyan-400" size={20} />, name: "React" },
                    { icon: <SiNodedotjs className="text-green-400" size={20} />, name: "Node.js" },
                    { icon: <SiRedis className="text-red-400" size={20} />, name: "Redis" },
                    { icon: <SiMysql className="text-orange-400" size={20} />, name: "MySQL" },
                    { icon: <SiPython className="text-yellow-400" size={20} />, name: "Python" },
                    { icon: <SiDjango className="text-green-500" size={20} />, name: "Django" },
                    { icon: <SiFlask className="text-gray-300" size={20} />, name: "Flask" },
                    { icon: <SiFastapi className="text-teal-400" size={20} />, name: "FastAPI" },
                  ].map((tech, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-3 py-1 bg-gray-700 rounded-full text-sm"
                    >
                      {tech.icon}
                      <span className="text-gray-200">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Future Experiences */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center py-8"
        >
          <p className="text-gray-400 italic">
            More exciting experiences to come...
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
