import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-5xl font-bold mb-2">Ravi Kumar</h1>
        <p className="text-xl mb-6">Front-End Developer | Bangalore, India</p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex justify-center space-x-6 mb-8"
        >
          <motion.a
            href="https://www.linkedin.com/in/ravikumar-sppu/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="text-3xl text-white hover:text-blue-200 transition-colors duration-300"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/aryanik"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
            className="text-3xl text-white hover:text-blue-200 transition-colors duration-300"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="mailto:myselfravibdps1@gmail.com"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="text-3xl text-white hover:text-blue-200 transition-colors duration-300"
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-6"
        >
          <ul className="flex justify-center space-x-6">
            {['About', 'Experience', 'Education', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-lg font-semibold hover:text-blue-200 transition-colors duration-300"
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </motion.div>
    </motion.header>
  );
};

export default Header;