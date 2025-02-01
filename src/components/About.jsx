import { motion } from 'framer-motion';
import { FaCode, FaReact, FaTools } from 'react-icons/fa';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      id="about"
      className="p-12 bg-gradient-to-r from-blue-50 to-indigo-50"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Profile Summary</h2>
        <p className="text-gray-700 text-lg mb-8">
          Front-End Developer with 2 years of experience in building scalable, high-performance front-end development, crafting efficient workflows using JavaScript, TypeScript, React, and Redux.
        </p>

        {/* Skills Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Coding Expertise */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <FaCode className="text-4xl text-blue-600 mr-4" />
              <h3 className="text-xl font-semibold text-blue-900">Coding Expertise</h3>
            </div>
            <p className="text-gray-600">
              Proficient in JavaScript, TypeScript, and modern front-end frameworks like React and Next.js.
            </p>
          </motion.div>

          {/* UI/UX Design */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <FaReact className="text-4xl text-blue-600 mr-4" />
              <h3 className="text-xl font-semibold text-blue-900">UI/UX Design</h3>
            </div>
            <p className="text-gray-600">
              Skilled in creating responsive and user-friendly interfaces using Tailwind CSS and Material-UI.
            </p>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <FaTools className="text-4xl text-blue-600 mr-4" />
              <h3 className="text-xl font-semibold text-blue-900">Tools & Technologies</h3>
            </div>
            <p className="text-gray-600">
              Experienced with Git, Webpack, Vite, and testing libraries like Jest and React Testing Library.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;