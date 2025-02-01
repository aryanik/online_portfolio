import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaBook } from 'react-icons/fa';

const Education = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="education"
      className="p-12 bg-gradient-to-r from-blue-50 to-indigo-50"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Education</h2>

        {/* Bachelor's Degree */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-8"
        >
          <div className="flex items-start space-x-4">
            <FaGraduationCap className="text-4xl text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                Savitribai Phule Pune University
              </h3>
              <p className="text-gray-600 mb-2">
                Bachelor of Engineering in Computer Engineering
              </p>
              <p className="text-gray-600">2018 – 2022 | CGPA: 9.19</p>
            </div>
          </div>
        </motion.div>

        {/* 12th Grade */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-8"
        >
          <div className="flex items-start space-x-4">
            <FaSchool className="text-4xl text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                J. D. Public School, CBSE
              </h3>
              <p className="text-gray-600 mb-2">12th Grade</p>
              <p className="text-gray-600">2015 – 2016</p>
            </div>
          </div>
        </motion.div>

        {/* 10th Grade */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex items-start space-x-4">
            <FaBook className="text-4xl text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                B.D. Public School, Patna
              </h3>
              <p className="text-gray-600 mb-2">10th Grade</p>
              <p className="text-gray-600">2014 – 2015</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;