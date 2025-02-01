import { motion } from 'framer-motion';
import { FaCode, FaTools, FaChartLine, FaCogs, FaUsers, FaRocket, FaShieldAlt, FaHandshake } from 'react-icons/fa';

const Experience = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="experience"
      className="p-12 bg-gradient-to-r from-blue-50 to-indigo-50"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Professional Experience</h2>

        {/* DeoTech Solutions */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-8"
        >
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">DeoTech Solutions</h3>
          <p className="text-gray-600 mb-6">Front-End Developer | April 2023 – Present</p>

          {/* Workleisure Project */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-blue-800 mb-2">
              <a
                href="https://workleisure.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Workleisure Platform ↗
              </a>
            </h4>
            <p className="text-gray-600 mb-4">
              An entity management platform for optimizing onboarding flows, certification handling, and admin functionalities.
            </p>
          </div>

          {/* Key Contributions */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="flex items-start space-x-4"
            >
              <FaCode className="text-2xl text-blue-600 flex-shrink-0" />
              <p className="text-gray-700">
                Built dynamic, responsive UI components using <strong>Material UI</strong> and <strong>Tailwind CSS</strong>, improving design consistency and user experience.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="flex items-start space-x-4"
            >
              <FaCogs className="text-2xl text-blue-600 flex-shrink-0" />
              <p className="text-gray-700">
                Implemented a robust <strong>feature flagging system</strong>, enabling role-based access to dynamic application features.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="flex items-start space-x-4"
            >
              <FaUsers className="text-2xl text-blue-600 flex-shrink-0" />
              <p className="text-gray-700">
                Led the design and integration of APIs for the <strong>Referral Partners</strong> module, streamlining onboarding and management processes.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="flex items-start space-x-4"
            >
              <FaTools className="text-2xl text-blue-600 flex-shrink-0" />
              <p className="text-gray-700">
                Utilized <strong>Redux Toolkit (RTK)</strong> for scalable state management, ensuring seamless data handling across complex workflows.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="flex items-start space-x-4"
            >
              <FaRocket className="text-2xl text-blue-600 flex-shrink-0" />
              <p className="text-gray-700">
                Optimized application performance by reducing page load times by <strong>25%</strong> through lazy loading, memoization, and caching techniques.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="flex items-start space-x-4"
            >
              <FaChartLine className="text-2xl text-blue-600 flex-shrink-0" />
              <p className="text-gray-700">
                Developed data-driven analytics dashboards with <strong>Recharts</strong>, enhancing business insights and decision-making efficiency.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="flex items-start space-x-4"
            >
              <FaShieldAlt className="text-2xl text-blue-600 flex-shrink-0" />
              <p className="text-gray-700">
                Integrated secure payment solutions with <strong>Razorpay</strong>, ensuring seamless transaction processing and compliance.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="flex items-start space-x-4"
            >
              <FaHandshake className="text-2xl text-blue-600 flex-shrink-0" />
              <p className="text-gray-700">
                Collaborated on debugging, code reviews, and agile development methodologies, maintaining high-quality standards.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;