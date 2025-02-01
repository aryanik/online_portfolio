import { motion } from 'framer-motion';
import {
  FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt,
  FaGitAlt, FaNpm, FaTools, FaDatabase, FaCodeBranch
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiRedux, SiMaterialdesign, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      category: 'Languages',
      items: [
        { name: 'JavaScript', icon: <FaJs className="text-4xl text-yellow-400" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-4xl text-blue-600" /> },
        { name: 'HTML', icon: <FaHtml5 className="text-4xl text-orange-500" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
        { name: 'Node.js (Basic)', icon: <FaNodeJs className="text-4xl text-green-600" /> },
      ],
    },
    {
      category: 'Frameworks & Libraries',
      items: [
        { name: 'React', icon: <FaReact className="text-4xl text-blue-400" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-4xl text-black" /> },
        { name: 'Redux', icon: <SiRedux className="text-4xl text-purple-600" /> },
        { name: 'Material-UI', icon: <SiMaterialdesign className="text-4xl text-blue-800" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-teal-400" /> },
      ],
    },
    {
      category: 'Tools & Technologies',
      items: [
        { name: 'Git', icon: <FaGitAlt className="text-4xl text-red-600" /> },
        { name: 'NPM', icon: <FaNpm className="text-4xl text-red-500" /> },
        { name: 'Webpack', icon: <FaTools className="text-4xl text-blue-700" /> },
        { name: 'Jest', icon: <FaCodeBranch className="text-4xl text-green-700" /> },
        { name: 'Postman', icon: <FaDatabase className="text-4xl text-orange-700" /> },
      ],
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="skills"
      className="p-12 bg-gradient-to-r from-blue-50 to-indigo-50"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                {skillCategory.category}
              </h3>
              <ul className="space-y-4">
                {skillCategory.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center space-x-4"
                  >
                    {item.icon}
                    <span className="text-gray-700 text-lg">{item.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;