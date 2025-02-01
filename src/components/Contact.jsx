import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="contact"
      className="p-12 bg-gradient-to-r from-purple-50 to-pink-50"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-purple-900">Contact Me</h2>
        <p className="text-gray-700 mb-8">
          Feel free to reach out to me for collaborations, opportunities, or just a friendly chat!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Email */}
          <motion.a
            href="mailto:myselfravibdps1@gmail.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
          >
            <FaEnvelope className="text-4xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-purple-900">Email</h3>
            <p className="text-gray-600">myselfravibdps1@gmail.com</p>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+916204437048"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
          >
            <FaPhone className="text-4xl text-pink-600 mb-4" />
            <h3 className="text-xl font-semibold text-purple-900">Phone</h3>
            <p className="text-gray-600">+91 6204437048</p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/ravikumar-sppu/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
          >
            <FaLinkedin className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-purple-900">LinkedIn</h3>
            <p className="text-gray-600">Ravi Kumar</p>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/aryanik"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
          >
            <FaGithub className="text-4xl text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold text-purple-900">GitHub</h3>
            <p className="text-gray-600">aryanik</p>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;