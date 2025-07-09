import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 text-center overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
        
        {/* Geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-blue-500 opacity-10 rotate-45"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 border border-purple-500 opacity-10 rounded-full"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="container mx-auto px-4 relative z-10"
      >
        {/* Main Title with Glowing Effect */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-7xl font-black mb-4 relative">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Ravi Kumar
            </span>
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg blur opacity-20"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="relative"
          >
            <p className="text-2xl md:text-3xl font-light mb-2">
              <span className="text-blue-400">Front-End Developer</span>
            </p>
            <p className="text-lg text-gray-300 mb-8">
              📍 Bangalore, India
            </p>
          </motion.div>
        </motion.div>

        {/* Social Links with Enhanced Animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex justify-center space-x-8 mb-12"
        >
          {[
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/ravikumar-sppu/", color: "from-blue-600 to-blue-400" },
            { icon: FaGithub, href: "https://github.com/aryanik", color: "from-gray-600 to-gray-400" },
            { icon: FaEnvelope, href: "mailto:myselfravibdps1@gmail.com", color: "from-red-600 to-red-400" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.3, 
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
              className="relative group"
            >
              <motion.div
                className={`absolute -inset-2 bg-gradient-to-r ${social.color} rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300`}
                whileHover={{ scale: 1.1 }}
              />
              <div className={`relative p-4 bg-gradient-to-r ${social.color} rounded-full shadow-lg`}>
                <social.icon className="text-2xl text-white" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Navigation with Glassmorphism */}
        <motion.nav
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-8"
        >
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-6 shadow-2xl">
            <ul className="flex flex-wrap justify-center gap-6">
              {['About', 'Experience', 'Education', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="relative px-4 py-2 text-lg font-semibold text-white/90 hover:text-white transition-all duration-300 block"
                  >
                    {item}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      whileHover={{ scaleX: 1 }}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.nav>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default Header;