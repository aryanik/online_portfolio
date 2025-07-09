import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt,
  FaGitAlt, FaNpm, FaTools, FaDatabase, FaCodeBranch,
  FaDocker, FaServer, FaCogs
} from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiRedux, SiMaterialdesign, SiTailwindcss,
  SiElasticsearch, SiGithubactions, SiTestinglibrary
} from 'react-icons/si';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      category: 'Languages',
      color: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gradient-to-br from-gray-800/40 to-gray-900/40',
      borderColor: 'border-gray-700/50',
      items: [
        { name: 'JavaScript', icon: <FaJs className="text-4xl text-yellow-400" />, proficiency: 95 },
        { name: 'TypeScript', icon: <SiTypescript className="text-4xl text-blue-400" />, proficiency: 90 },
        { name: 'HTML', icon: <FaHtml5 className="text-4xl text-orange-400" />, proficiency: 98 },
        { name: 'CSS', icon: <FaCss3Alt className="text-4xl text-blue-400" />, proficiency: 92 },
        { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-400" />, proficiency: 88 },
      ],
    },
    {
      category: 'Frameworks & Libraries',
      color: 'from-gray-500 to-gray-700',
      bgColor: 'bg-gradient-to-br from-gray-800/40 to-black/40',
      borderColor: 'border-gray-600/50',
      items: [
        { name: 'React', icon: <FaReact className="text-4xl text-cyan-400" />, proficiency: 95 },
        { name: 'Next.js', icon: <SiNextdotjs className="text-4xl text-white" />, proficiency: 85 },
        { name: 'Redux', icon: <SiRedux className="text-4xl text-purple-400" />, proficiency: 80 },
        { name: 'Material-UI', icon: <SiMaterialdesign className="text-4xl text-blue-400" />, proficiency: 85 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-teal-400" />, proficiency: 90 },
        { name: 'TanStack Query', icon: <FaCogs className="text-4xl text-indigo-400" />, proficiency: 75 },
      ],
    },
    {
      category: 'Tools & Technologies',
      color: 'from-gray-600 to-gray-800',
      bgColor: 'bg-gradient-to-br from-black/40 to-gray-900/40',
      borderColor: 'border-gray-500/50',
      items: [
        { name: 'Docker', icon: <FaDocker className="text-4xl text-blue-400" />, proficiency: 80 },
        { name: 'Nginx', icon: <FaServer className="text-4xl text-gray-300" />, proficiency: 70 },
        { name: 'ElasticSearch', icon: <SiElasticsearch className="text-4xl text-pink-400" />, proficiency: 75 },
        { name: 'Git', icon: <FaGitAlt className="text-4xl text-red-400" />, proficiency: 90 },
        { name: 'GitHub Actions', icon: <SiGithubactions className="text-4xl text-gray-200" />, proficiency: 78 },
        { name: 'Jest', icon: <FaCodeBranch className="text-4xl text-green-400" />, proficiency: 85 },
        { name: 'React Testing Library', icon: <SiTestinglibrary className="text-4xl text-rose-400" />, proficiency: 82 },
        { name: 'Postman', icon: <FaDatabase className="text-4xl text-orange-400" />, proficiency: 88 },
        { name: 'Webpack', icon: <FaTools className="text-4xl text-blue-400" />, proficiency: 75 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const categoryVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div id="skills" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Code-like floating elements */}
      <div className="absolute inset-0 opacity-10">
        {['{}', '()', '[]', '<>', '&&', '||', '=>', '==='].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl font-mono text-gray-500"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 5, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 p-12"
      >
        <div className="max-w-7xl mx-auto">
          {/* Creative Title */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-6xl font-bold mb-6 bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Technical Arsenal
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Crafting digital experiences with modern technologies
            </motion.p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {skills.map((skillCategory, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={categoryVariants}
                className="relative group"
                onHoverStart={() => setActiveCategory(categoryIndex)}
                onHoverEnd={() => setActiveCategory(null)}
              >
                <motion.div
                  className={`relative p-8 rounded-3xl backdrop-blur-sm bg-black/20 border border-gray-800/50 shadow-2xl overflow-hidden ${skillCategory.bgColor} ${skillCategory.borderColor}`}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Animated Background Overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${skillCategory.color} opacity-0 group-hover:opacity-5`}
                    animate={activeCategory === categoryIndex ? { opacity: 0.05 } : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Glowing Border Effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${skillCategory.color} opacity-0 group-hover:opacity-10 blur-xl`}
                    animate={activeCategory === categoryIndex ? { opacity: 0.1 } : { opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />

                  <div className="relative z-10">
                    {/* Category Header */}
                    <motion.div
                      className="flex items-center justify-between mb-8"
                      whileHover={{ x: 5 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-100">
                        {skillCategory.category}
                      </h3>
                      <motion.div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${skillCategory.color} flex items-center justify-center`}
                        animate={activeCategory === categoryIndex ? { rotate: 360 } : { rotate: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <span className="text-white font-bold text-lg">
                          {skillCategory.items.length}
                        </span>
                      </motion.div>
                    </motion.div>

                    {/* Skills List */}
                    <motion.div className="space-y-4">
                      {skillCategory.items.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          variants={skillVariants}
                          className="group/skill relative"
                          onHoverStart={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                          onHoverEnd={() => setHoveredSkill(null)}
                        >
                          <motion.div
                            className="flex items-center space-x-4 p-4 rounded-xl bg-black/20 backdrop-blur-sm border border-gray-800/30 cursor-pointer"
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: "rgba(0,0,0,0.3)"
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                          >
                            {/* Icon with Animation */}
                            <motion.div
                              animate={hoveredSkill === `${categoryIndex}-${skillIndex}` ? {
                                rotate: [0, -10, 10, -10, 0],
                                scale: 1.2
                              } : { rotate: 0, scale: 1 }}
                              transition={{ duration: 0.5 }}
                              className="flex-shrink-0"
                            >
                              {skill.icon}
                            </motion.div>

                            {/* Skill Details */}
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-gray-100 mb-1">
                                {skill.name}
                              </h4>
                              
                              {/* Proficiency Bar */}
                              <div className="w-full bg-gray-800 rounded-full h-2">
                                <motion.div
                                  className={`h-full rounded-full bg-gradient-to-r ${skillCategory.color}`}
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.proficiency}%` }}
                                  transition={{ 
                                    duration: 1.5, 
                                    delay: skillIndex * 0.1,
                                    ease: "easeOut"
                                  }}
                                />
                              </div>
                              
                              {/* Proficiency Percentage */}
                              <motion.span
                                className="text-xs text-gray-500 mt-1 block"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: skillIndex * 0.1 + 0.5 }}
                              >
                                {skill.proficiency}%
                              </motion.span>
                            </div>
                          </motion.div>

                          {/* Hover Effect Particles */}
                          {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                            <>
                              {[...Array(3)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className={`absolute w-1 h-1 bg-gradient-to-r ${skillCategory.color} rounded-full`}
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{
                                    opacity: [0, 1, 0],
                                    scale: [0, 1, 0],
                                    x: [0, (Math.random() - 0.5) * 60],
                                    y: [0, (Math.random() - 0.5) * 60]
                                  }}
                                  transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    delay: i * 0.2
                                  }}
                                  style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`
                                  }}
                                />
                              ))}
                            </>
                          )}
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Skills;