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
      category: 'Core Languages',
      color: 'from-purple-400 via-pink-400 to-red-400',
      bgColor: 'bg-gradient-to-br from-purple-900/30 to-pink-900/30',
      borderColor: 'border-purple-500/30',
      glowColor: 'shadow-purple-500/20',
      items: [
        { name: 'JavaScript', icon: <FaJs className="text-4xl text-yellow-400" />, },
        { name: 'TypeScript', icon: <SiTypescript className="text-4xl text-blue-400" />,  },
        { name: 'HTML', icon: <FaHtml5 className="text-4xl text-orange-400" />, },
        { name: 'CSS', icon: <FaCss3Alt className="text-4xl text-blue-400" />,  },
        { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-400" />,  },
      ],
    },
    {
      category: 'Frameworks & Libraries',
      color: 'from-cyan-400 via-blue-400 to-indigo-400',
      bgColor: 'bg-gradient-to-br from-cyan-900/30 to-blue-900/30',
      borderColor: 'border-cyan-500/30',
      glowColor: 'shadow-cyan-500/20',
      items: [
        { name: 'React', icon: <FaReact className="text-4xl text-cyan-400" />, },
        { name: 'Next.js', icon: <SiNextdotjs className="text-4xl text-white" />, },
        { name: 'Redux', icon: <SiRedux className="text-4xl text-purple-400" />,  },
        { name: 'Material-UI', icon: <SiMaterialdesign className="text-4xl text-blue-400" />,  },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-teal-400" />,  },
        { name: 'TanStack Query', icon: <FaCogs className="text-4xl text-indigo-400" />,  },
      ],
    },
    {
      category: 'Tools & DevOps',
      color: 'from-green-400 via-emerald-400 to-teal-400',
      bgColor: 'bg-gradient-to-br from-green-900/30 to-emerald-900/30',
      borderColor: 'border-green-500/30',
      glowColor: 'shadow-green-500/20',
      items: [
        { name: 'Docker', icon: <FaDocker className="text-4xl text-blue-400" /> },
        { name: 'Nginx', icon: <FaServer className="text-4xl text-gray-300" /> },
        { name: 'ElasticSearch', icon: <SiElasticsearch className="text-4xl text-pink-400" /> },
        { name: 'Git', icon: <FaGitAlt className="text-4xl text-red-400" />, level: 'expert' },
        { name: 'GitHub Actions', icon: <SiGithubactions className="text-4xl text-gray-200" />, },
        { name: 'Jest', icon: <FaCodeBranch className="text-4xl text-green-400" />, },
        { name: 'React Testing Library', icon: <SiTestinglibrary className="text-4xl text-rose-400" />,  },
        { name: 'Postman', icon: <FaDatabase className="text-4xl text-orange-400" />},
        { name: 'Webpack', icon: <FaTools className="text-4xl text-blue-400" />  },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.9,
      rotateX: -20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12
      }
    }
  };

  return (
    <div id="skills" className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden relative">
      {/* Animated Orbs Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              background: `radial-gradient(circle, ${['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444', '#EC4899'][i % 6]} 0%, transparent 70%)`,
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating Code Symbols */}
      <div className="absolute inset-0 opacity-5">
        {['{ }', '< />', '[ ]', '( )', '&&', '||', '=>', '===', '!=', '++'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl font-mono font-bold text-white"
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 10, 0],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
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
        transition={{ duration: 1.2 }}
        className="relative z-10 p-8 md:p-12"
      >
        <div className="max-w-7xl mx-auto">
          {/* Hero Title */}
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Skills & Expertise
            </motion.h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Transforming ideas into digital reality with cutting-edge technologies
            </motion.p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12"
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
                  className={`relative p-8 rounded-3xl backdrop-blur-md bg-white/5 border ${skillCategory.borderColor} shadow-2xl overflow-hidden ${skillCategory.bgColor}`}
                  whileHover={{ 
                    scale: 1.03,
                    y: -10,
                    boxShadow: `0 25px 50px ${skillCategory.glowColor}`
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Animated Gradient Overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${skillCategory.color} opacity-0 group-hover:opacity-10 rounded-3xl`}
                    animate={activeCategory === categoryIndex ? { opacity: 0.1 } : { opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Glowing Border */}
                  <motion.div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${skillCategory.color} opacity-0 group-hover:opacity-20 blur-xl`}
                    animate={activeCategory === categoryIndex ? { opacity: 0.2 } : { opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />

                  <div className="relative z-10">
                    {/* Category Header */}
                    <motion.div
                      className="text-center mb-10"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.h3 
                        className="text-2xl md:text-3xl font-bold text-white mb-4"
                        animate={activeCategory === categoryIndex ? { 
                          textShadow: "0 0 20px rgba(255,255,255,0.5)" 
                        } : {}}
                      >
                        {skillCategory.category}
                      </motion.h3>
                      <motion.div
                        className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${skillCategory.color} flex items-center justify-center shadow-lg`}
                        animate={activeCategory === categoryIndex ? { 
                          rotate: 360,
                          scale: 1.1,
                          boxShadow: `0 0 30px ${skillCategory.glowColor}`
                        } : { rotate: 0, scale: 1 }}
                        transition={{ duration: 0.8 }}
                      >
                        <span className="text-white font-bold text-xl">
                          {skillCategory.items.length}
                        </span>
                      </motion.div>
                    </motion.div>

                    {/* Skills Grid */}
                    <motion.div className="grid grid-cols-1 gap-4">
                      {skillCategory.items.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          variants={skillVariants}
                          className="group/skill relative"
                          onHoverStart={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                          onHoverEnd={() => setHoveredSkill(null)}
                        >
                          <motion.div
                            className="flex items-center space-x-4 p-4 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 cursor-pointer"
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: "rgba(255,255,255,0.1)",
                              borderColor: "rgba(255,255,255,0.2)"
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                          >
                            {/* Animated Icon */}
                            <motion.div
                              animate={hoveredSkill === `${categoryIndex}-${skillIndex}` ? {
                                rotate: [0, -15, 15, 0],
                                scale: 1.3
                              } : { rotate: 0, scale: 1 }}
                              transition={{ duration: 0.6 }}
                              className="flex-shrink-0"
                            >
                              {skill.icon}
                            </motion.div>

                            {/* Skill Info */}
                            <div className="flex-1 flex items-center justify-between">
                              <h4 className="text-lg font-semibold text-white">
                                {skill.name}
                              </h4>
                            </div>
                          </motion.div>

                          {/* Magical Particles on Hover */}
                          {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                            <div className="absolute inset-0 pointer-events-none">
                              {[...Array(5)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className={`absolute w-2 h-2 bg-gradient-to-r ${skillCategory.color} rounded-full`}
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{
                                    opacity: [0, 1, 0],
                                    scale: [0, 1, 0],
                                    x: [0, (Math.random() - 0.5) * 100],
                                    y: [0, (Math.random() - 0.5) * 100]
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.2
                                  }}
                                  style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`
                                  }}
                                />
                              ))}
                            </div>
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