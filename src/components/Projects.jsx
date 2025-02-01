import { motion } from 'framer-motion';
import { FaHotel, FaUtensils, FaPiggyBank } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Guest-Hotel Management',
      description:
        'Built a hotel management platform with features like real-time bookings, user authentication, and dynamic dashboards using React Query.',
      link: 'https://the-guest-management.netlify.app',
      icon: <FaHotel className="text-4xl text-blue-600" />,
    },
    {
      title: 'Food E-Commerce Using Swiggy API',
      description:
        'A Food E-commerce Website using React and Redux using APIs.',
      link: 'https://github.com/aryanik/Food-e-commerce',
      icon: <FaUtensils className="text-4xl text-orange-600" />,
    },
    {
      title: 'Redux Bank',
      description:
        'A simple and functional project built using HTML, CSS, JavaScript, and Redux Toolkit. It demonstrates the practical implementation of state management concepts in a banking application, allowing users to perform essential account operations such as adding new customers, making deposits and withdrawals, and requesting loans.',
      link: 'https://aryanik.github.io/Redux-Bank/',
      icon: <FaPiggyBank className="text-4xl text-green-600" />,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="projects"
      className="p-12 bg-gradient-to-r from-blue-50 to-indigo-50"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Personal Projects</h2>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                {project.icon}
                <div>
                  <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Project
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

export default Projects;