import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaGraduationCap, FaSchool, FaBook } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      title: 'Advanced JavaScript',
      issuer: 'Udemy',
      issuedDate: 'Jan 2025',
      link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-3bf9af75-6945-46c4-98df-72246baef47c.pdf',
      icon: <FaCertificate className="text-4xl text-emerald-400" />,
      color: 'emerald'
    },
    {
      title: 'React – Complete Guide (Next.js, Redux)',
      issuer: 'Udemy',
      issuedDate: 'Jul 2020',
      link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-3bf9af75-6945-46c4-98df-72246baef47c.pdf',
      icon: <FaCertificate className="text-4xl text-blue-400" />,
      color: 'blue'
    },
    {
      title: 'Web Development Bootcamp',
      issuer: 'Udemy',
      issuedDate: 'Jul 2020',
      link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-97245eeb-6bc1-4ef1-af4c-974890a3cc66.pdf',
      icon: <FaCertificate className="text-4xl text-purple-400" />,
      color: 'purple'
    },
    {
      title: 'Actuarial Common Entrance Test (ACET)',
      issuer: 'Institute of Actuaries of India',
      issuedDate: 'Sep 2019',
      link: 'https://www.actuariesindia.org/sites/default/files/2022-09/ACET_September_2019_Result.pdf',
      icon: <FaCertificate className="text-4xl text-yellow-400" />,
      color: 'yellow'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden relative">
      {/* Animated Bubbles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white opacity-10"
            animate={{ x: [0, Math.random() * 200 - 100, 0], y: [0, Math.random() * 200 - 100, 0] }}
            transition={{ duration: 5 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 3 }}
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="certifications"
        className="relative z-10 p-12"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent"
          >
            Certifications
          </motion.h2>

          <div className="space-y-8">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gray-800 bg-opacity-40 backdrop-blur-sm rounded-2xl border border-gray-700 shadow-lg flex items-start space-x-6"
              >
                <div className="flex-shrink-0">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-1">{cert.title}</h3>
                  <p className="text-gray-400 mb-1">{cert.issuer} &#8226; {cert.issuedDate}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm font-medium text-white bg-gray-900 px-4 py-2 rounded-full hover:opacity-90 transition"
                  >
                    View Credential
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Certifications;
