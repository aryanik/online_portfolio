import { motion } from 'framer-motion';
import { FaCertificate, FaGraduationCap } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      title: 'Advanced JavaScript',
      issuer: 'Udemy',
      issuedDate: 'Issued Jan 2025',
      credentialLink: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-3bf9af75-6945-46c4-98df-72246baef47c.pdf',
      icon: <FaCertificate className="text-4xl text-blue-600" />,
    },
    {
      title: 'React - The Complete Guide 2025 (incl. Next.js, Redux)',
      issuer: 'Udemy',
      issuedDate: 'Issued Jul 2020',
      credentialLink: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-3bf9af75-6945-46c4-98df-72246baef47c.pdf',
      icon: <FaCertificate className="text-4xl text-blue-600" />,
    },
    {
      title: 'The Complete 2024 Web Development Bootcamp',
      issuer: 'Udemy',
      issuedDate: 'Issued Jul 2020',
      credentialLink: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-97245eeb-6bc1-4ef1-af4c-974890a3cc66.pdf',
      icon: <FaCertificate className="text-4xl text-blue-600" />,
    },
    {
      title: 'Actuarial Common Entrance Test (ACET)',
      issuer: 'Institute of Actuaries of India',
      issuedDate: 'Issued Sep 2019',
      credentialId: 'Credential ID IAIEE-SEP19-1646',
      credentialLink: 'https://www.actuariesindia.org/sites/default/files/2022-09/ACET_September_2019_Result.pdf',
      icon: <FaGraduationCap className="text-4xl text-green-600" />,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="certifications"
      className="p-12 bg-gradient-to-r from-blue-50 to-indigo-50"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Certifications</h2>

        <div className="space-y-6">
          {certifications.map((certification, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                {certification.icon}
                <div>
                  <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                    {certification.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {certification.issuer} | {certification.issuedDate}
                  </p>
                  {certification.credentialId && (
                    <p className="text-gray-600 mb-2">{certification.credentialId}</p>
                  )}
                  <a
                    href={certification.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Credential
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;