import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaBook } from 'react-icons/fa';

const Education = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const entries = [
    {
      icon: <FaGraduationCap className="text-4xl text-emerald-400" />, 
      title: "Savitribai Phule Pune University",
      subtitle: "Bachelor of Engineering, Computer Engineering",
      period: "2018 – 2022",
      detail: "CGPA: 9.19",
      color: "emerald"
    },
    {
      icon: <FaSchool className="text-4xl text-amber-400" />, 
      title: "J. D. Public School, CBSE",
      subtitle: "12th Grade",
      period: "2015 – 2016",
      color: "amber"
    },
    {
      icon: <FaBook className="text-4xl text-violet-400" />, 
      title: "B.D. Public School, Patna",
      subtitle: "10th Grade",
      period: "2014 – 2015",
      color: "violet"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        id="education"
        transition={{ duration: 1 }}
        className="relative z-10 p-12"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Educational Journey
            </motion.h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-purple-400 mx-auto rounded-full"
              animate={{
                width: [128, 200, 128],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3,
                  delayChildren: 0.2
                }
              }
            }}
            className="relative"
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 via-amber-400 to-violet-400 rounded-full opacity-30" />

            {entries.map((entry, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 100, scale: 0.8, rotateY: -90 },
                  visible: {
                    opacity: 1, y: 0, scale: 1, rotateY: 0,
                    transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.8 }
                  }
                }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <motion.div
                  className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className={`relative p-8 rounded-3xl backdrop-blur-sm bg-white/10 border border-white/20 shadow-2xl group cursor-pointer overflow-hidden`}
                    animate={hoveredIndex === index ? {
                      boxShadow: entry.color === 'emerald' ? '0 0 30px rgba(16, 185, 129, 0.4)' :
                                 entry.color === 'amber' ? '0 0 30px rgba(245, 158, 11, 0.4)' :
                                 '0 0 30px rgba(139, 92, 246, 0.4)',
                      borderColor: entry.color === 'emerald' ? 'rgba(16, 185, 129, 0.6)' :
                                   entry.color === 'amber' ? 'rgba(245, 158, 11, 0.6)' :
                                   'rgba(139, 92, 246, 0.6)'
                    } : {}}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br ${
                        entry.color === 'emerald' ? 'from-emerald-400 to-emerald-600' :
                        entry.color === 'amber' ? 'from-amber-400 to-amber-600' :
                        'from-violet-400 to-violet-600'
                      }`}
                      animate={hoveredIndex === index ? { opacity: 0.2 } : { opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">
                        {entry.title}
                      </h3>
                      <p className="text-gray-300 mb-2 text-lg">{entry.subtitle}</p>
                      <p className="text-gray-400 italic mb-3">{entry.period}</p>
                      {entry.detail && (
                        <motion.p 
                          className={`font-semibold text-${entry.color}-400`}
                          animate={hoveredIndex === index ? { scale: 1.1 } : { scale: 1 }}
                        >
                          {entry.detail}
                        </motion.p>
                      )}
                    </div>

                    {hoveredIndex === index && (
                      <>
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`absolute w-2 h-2 bg-${entry.color}-400 rounded-full`}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0],
                              x: [0, (Math.random() - 0.5) * 100],
                              y: [0, (Math.random() - 0.5) * 100]
                            }}
                            transition={{
                              duration: 2,
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
                </motion.div>

                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 z-20"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <motion.div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${
                      entry.color === 'emerald' ? 'from-emerald-400 to-emerald-600' :
                      entry.color === 'amber' ? 'from-amber-400 to-amber-600' :
                      'from-violet-400 to-violet-600'
                    } flex items-center justify-center shadow-lg border-4 border-white/30`}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      boxShadow: entry.color === 'emerald' ? '0 0 30px rgba(16, 185, 129, 0.8)' :
                                 entry.color === 'amber' ? '0 0 30px rgba(245, 158, 11, 0.8)' :
                                 '0 0 30px rgba(139, 92, 246, 0.8)'
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <motion.div
                      animate={hoveredIndex === index ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {entry.icon}
                    </motion.div>
                  </motion.div>
                </motion.div>

                <div className="w-5/12" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Education;
