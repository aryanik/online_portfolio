import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-fit bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden relative px-4 py-8">
      {/* Animated Bubble Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              opacity: [0.1, 0.6, 0.1]
            }}
            transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 3 }}
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 p-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-400 mb-8 break-words"
          >
            Whether you have a question, project idea, or just want to connect, I'm here and ready to chat.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                icon: <FaEnvelope className="text-4xl text-purple-400" />, 
                label: 'Email',
                value: 'myselfravibdps1@gmail.com',
                link: 'mailto:myselfravibdps1@gmail.com'
              },
              {
                icon: <FaPhone className="text-4xl text-pink-400" />, 
                label: 'Phone',
                value: '+91 6204437048',
                link: 'tel:+916204437048'
              },
              {
                icon: <FaLinkedin className="text-4xl text-blue-500" />, 
                label: 'LinkedIn',
                value: 'Ravi Kumar',
                link: 'https://www.linkedin.com/in/ravikumar-sppu/'
              },
              {
                icon: <FaGithub className="text-4xl text-gray-300" />, 
                label: 'GitHub',
                value: 'aryanik',
                link: 'https://github.com/aryanik'
              }
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ scale: 1.1, boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-gray-800 bg-opacity-40 backdrop-blur-sm rounded-lg border border-gray-700 shadow flex flex-col items-center space-y-2 break-words"
              >
                {item.icon}
                <h3 className="text-xl font-semibold text-white">{item.label}</h3>
                <p className="text-gray-300">{item.value}</p>
              </motion.a>
            ))}
          </div>

          {/* Floating Contact Button */}
          <motion.a
            href="mailto:myselfravibdps1@gmail.com"
            className="absolute bottom-4 right-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white p-3 rounded-full shadow-2xl cursor-pointer"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.1 }}
          >
            <FaEnvelope className="text-2xl" />
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;