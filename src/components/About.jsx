import { motion } from 'framer-motion';
import { FaCode, FaReact, FaServer, FaTools, FaPalette, FaLightbulb, FaRocket } from 'react-icons/fa';
import { useState } from 'react';

const About = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpanded = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const skillsData = [
    {
      icon: FaCode,
      title: "Frontend",
      color: "from-blue-600 to-cyan-500",
      glowColor: "blue-500",
      skills: ["JavaScript", "TypeScript", "React", "Vue.js", "HTML5", "CSS3", "Tailwind CSS", "Material-UI", "Sass", "Bootstrap", "Webpack", "Vite"],
      description: "Modern frontend technologies with focus on performance and user experience"
    },
    {
      icon: FaPalette,
      title: "UI/UX",
      color: "from-purple-600 to-pink-500",
      glowColor: "purple-500",
      skills: ["Responsive Design", "Accessibility", "Component Architecture", "Real-time Dashboards", "Data Visualization", "User Testing", "Prototyping", "Figma"],
      description: "Creating intuitive and accessible user interfaces with modern design principles"
    },
    {
      icon: FaServer,
      title: "Backend & DevOps",
      color: "from-green-600 to-teal-500",
      glowColor: "green-500",
      skills: ["Node.js", "Express", "MySQL", "Docker", "AWS ECS", "GitHub Actions", "Nginx", "Keycloak", "Elasticsearch", "Redis"],
      description: "Full-stack development with cloud infrastructure and CI/CD expertise"
    },
    {
      icon: FaTools,
      title: "Tools & Testing",
      color: "from-orange-600 to-red-500",
      glowColor: "orange-500",
      skills: ["Git", "Webpack", "Vite", "Jest", "Playwright", "Grafana", "ELK Stack", "Postman", "React Testing Library", "Prometheus"],
      description: "Comprehensive testing and monitoring tools for robust applications"
    }
  ];

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="about"
      className="relative p-12 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <div className="w-16 h-16 border-2 border-blue-400 rotate-45" />
          </motion.div>
        ))}
        
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 relative">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Profile Summary
              </span>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-xl blur-xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </h2>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <p className="text-gray-300 text-xl leading-relaxed mb-8 relative">
              <span className="relative z-10">
                Experienced Front-End Developer crafting responsive, user-centric applications with modern stacks. 
                Skilled in JavaScript/TypeScript, React, Vue.js, state management, and CI/CD workflows.
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent"
                animate={{ x: [-100, 100] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </p>
            
            {/* Stats */}
            <div className="flex justify-center space-x-12 mb-8">
              {[
                { icon: FaRocket, label: "Years Experience", value: "2+" },
                { icon: FaLightbulb, label: "Projects Completed", value: "10+" },
                { icon: FaCode, label: "Technologies", value: "20+" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <stat.icon className="text-3xl text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="relative p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 overflow-hidden">
                {/* Animated background glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                
                {/* Floating particles on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-${skill.glowColor} rounded-full`}
                      animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${20 + i * 10}%`,
                      }}
                    />
                  ))}
                </div>

                {/* Icon and Title */}
                <div className="relative z-10 flex items-center mb-6">
                  <motion.div
                    className={`p-3 bg-gradient-to-r ${skill.color} rounded-xl shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <skill.icon className="text-2xl text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white ml-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {skill.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 relative z-10 group-hover:text-gray-300 transition-colors duration-300">
                  {skill.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {(expandedCards[index] ? skill.skills : skill.skills.slice(0, 4)).map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      animate={{
                        y: [0, -2, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: techIndex * 0.2,
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {!expandedCards[index] && skill.skills.length > 4 && (
                    <motion.button
                      onClick={() => toggleExpanded(index)}
                      className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 text-xs rounded-full border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      +{skill.skills.length - 4} more
                    </motion.button>
                  )}
                  {expandedCards[index] && (
                    <motion.button
                      onClick={() => toggleExpanded(index)}
                      className="px-3 py-1 bg-gradient-to-r from-red-600/20 to-pink-600/20 text-red-400 text-xs rounded-full border border-red-500/30 hover:border-red-400/50 transition-all duration-300 hover:scale-110 cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Show less
                    </motion.button>
                  )}
                </div>

                {/* Hover effect line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;