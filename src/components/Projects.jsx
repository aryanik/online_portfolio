import React from 'react';
import { motion } from 'framer-motion';
import { FaHotel, FaUtensils, FaPiggyBank, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Guest-Hotel Management',
      description: 'Built a hotel management platform with features like real-time bookings, user authentication, and dynamic dashboards using React Query.',
      link: 'https://the-guest-management.netlify.app',
      icon: <FaHotel />,
      tech: ['React', 'React Query', 'Authentication'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Food E-Commerce Using Swiggy API',
      description: 'A Food E-commerce Website using React and Redux using APIs.',
      link: 'https://github.com/aryanik/Food-e-commerce',
      icon: <FaUtensils />,
      tech: ['React', 'Redux', 'APIs'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Redux Bank',
      description: 'A simple and functional project built using HTML, CSS, JavaScript, and Redux Toolkit. It demonstrates the practical implementation of state management concepts in a banking application, allowing users to perform essential account operations such as adding new customers, making deposits and withdrawals, and requesting loans.',
      link: 'https://aryanik.github.io/Redux-Bank/',
      icon: <FaPiggyBank />,
      tech: ['HTML', 'CSS', 'JavaScript', 'Redux'],
      color: 'from-green-500 to-emerald-600'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div id="projects" className="min-h-screen bg-black text-white py-16 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Personal Projects
          </motion.h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
          <motion.p
            className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Exploring the intersection of creativity and technology through innovative solutions
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 h-full border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 overflow-hidden">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Card Content */}
                <div className="relative z-10">
                  {/* Icon Section */}
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center text-white text-2xl mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {project.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed line-clamp-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700/50 hover:border-gray-600/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-current/25 transition-all duration-300 group/btn`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View Project</span>
                    <FaExternalLinkAlt className="text-sm group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.a>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;