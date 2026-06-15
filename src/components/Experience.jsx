import { useState, useEffect } from 'react';
import {
  FaCode,
  FaTools,
  FaChartLine,
  FaCogs,
  FaUsers,
  FaRocket,
  FaShieldAlt,
  FaHandshake,
  FaServer,
  FaKey,
  FaCloudUploadAlt,
  FaSearch,
  FaDocker,
  FaAws,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaBriefcase,
  FaTasks,
  FaDatabase
} from 'react-icons/fa';

const Experience = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const experiences = [
    {
      id: 1,
      company: 'HashedIn by Deloitte',
      role: 'Frontend Developer',
      period: 'Mar 2026 – Present',
      status: 'current',
      accent: 'from-cyan-400 to-blue-500',
      badgeClass: 'bg-emerald-500 text-black',
      description:
        'Contributing to the development and optimization of enterprise product tooling with a focus on scalability, performance, maintainability, and system efficiency.',
    
      achievements: [
        {
          icon: FaCode,
          text: 'Develop reusable and modular UI components using React, TypeScript, and Tailwind CSS to improve consistency, maintainability, and development velocity.',
          tech: ['React', 'TypeScript', 'Tailwind CSS'],
        },
        {
          icon: FaTasks,
          text: 'Contribute to scalable frontend architecture by promoting component-driven development, clean code practices, and separation of concerns.',
          tech: ['Frontend Architecture', 'Maintainability'],
        },
        {
          icon: FaRocket,
          text: 'Optimize application performance through memoization, lazy loading, code splitting, and rendering optimizations.',
          tech: ['Performance Optimization', 'Lazy Loading'],
        },
        {
          icon: FaCogs,
          text: 'Manage complex application state using Redux while ensuring predictable data flow across large-scale workflows.',
          tech: ['Redux', 'State Management'],
        },
        {
          icon: FaDatabase,
          text: 'Integrate and optimize API interactions to improve data-fetching efficiency and minimize unnecessary re-renders.',
          tech: ['API Integration', 'Data Optimization'],
        },
        {
          icon: FaShieldAlt,
          text: 'Support the development of robust and scalable frontend systems that enhance product reliability and user experience.',
          tech: ['Scalability', 'System Efficiency'],
        },
      ],
    },
    {
      id: 2,
      company: "Ninestars Information Technologies Pvt. Ltd.",
      role: "MERN Stack Developer",
      period: "Feb 2025 – Mar 2026",
      status: "previous",
      accent: "from-cyan-500 to-teal-500",
      badgeClass: "bg-gray-600 text-white",
      description:
        "Worked on full-stack web applications, real-time dashboards, backend services, and cloud-based data processing solutions.",
    
      achievements: [
        {
          icon: FaCode,
          text: "Developed modular and reusable frontend components using Vue.js and built interactive dashboards for data visualization.",
          tech: ["Vue.js", "JavaScript", "Dashboards"],
        },
        {
          icon: FaRocket,
          text: "Improved application performance through code splitting, lazy loading, and efficient client-side data caching strategies.",
          tech: ["Performance Optimization", "Lazy Loading"],
        },
        {
          icon: FaDatabase,
          text: "Built scalable backend services using Node.js, Express, and MySQL while implementing ETL workflows for external data ingestion.",
          tech: ["Node.js", "Express", "MySQL", "ETL"],
        },
        {
          icon: FaShieldAlt,
          text: "Implemented secure authentication and authorization mechanisms using Keycloak, OAuth2, and role-based access control.",
          tech: ["Keycloak", "OAuth2", "RBAC"],
        },
        {
          icon: FaTools,
          text: "Designed REST APIs and search functionalities with optimized query handling and high-performance data retrieval.",
          tech: ["REST APIs", "Search Optimization"],
        },
        {
          icon: FaCogs,
          text: "Containerized applications using Docker and participated in CI/CD deployment workflows on AWS environments.",
          tech: ["Docker", "AWS", "CI/CD"],
        },
      ],
    },
    {
      id: 2,
      company: "DeoTech Solutions",
      role: "Front-End Developer",
      period: "April 2023 – Feb 2025",
      status: "previous",
      color: "purple",
      gradientFrom: "from-blue-700",
      gradientTo: "to-blue-900",
      shadowColor: "shadow-purple-500/50",
      glowColor: "purple-400",
      project: {
        name: "Workleisure Platform",
        url: "https://workleisure.in"
      },
      achievements: [
        {
          icon: FaCode,
          text: "Built responsive UI components using Material UI and Tailwind CSS, enhancing design consistency and usability.",
          highlight: "Material UI",
          tech: ["Material UI", "Tailwind CSS"]
        },
        {
          icon: FaCogs,
          text: "Implemented a feature flagging system and protected routes for role-based access and dynamic UI rendering.",
          highlight: "Feature flagging",
          tech: ["Feature flags", "Protected routes"]
        },
        {
          icon: FaTools,
          text: "Managed complex states using Redux Toolkit and handled side-effects with Redux-Saga.",
          highlight: "Redux ecosystem",
          tech: ["Redux Toolkit", "Redux-Saga"]
        },
        {
          icon: FaUsers,
          text: "Developed the Referral Partners dashboard and integrated REST APIs using Axios.",
          highlight: "REST APIs",
          tech: ["Dashboard", "Axios"]
        },
        {
          icon: FaChartLine,
          text: "Built real-time analytics dashboards with Recharts, improving decision-making by 40–50%.",
          highlight: "40-50% improvement",
          tech: ["Recharts", "Analytics"]
        },
        {
          icon: FaRocket,
          text: "Enhanced performance by reducing load times by 25% using memoization, lazy loading, and CDN caching.",
          highlight: "25% faster",
          tech: ["Memoization", "CDN caching"]
        },
        {
          icon: FaShieldAlt,
          text: "Integrated secure payments using Razorpay APIs with responsive transaction workflows.",
          highlight: "Razorpay",
          tech: ["Razorpay", "Payment APIs"]
        },
        {
          icon: FaHandshake,
          text: "Collaborated in Agile sprints for code reviews, debugging, and task estimations to uphold clean code standards.",
          highlight: "Agile methodology",
          tech: ["Agile", "Code reviews"]
        }
      ]
    }
  ];

  const FloatingParticles = ({ color, isActive }) => {
    if (!isActive) return null;
    
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-${color} rounded-full animate-ping opacity-60`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${2 + Math.random()}s`
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <section 
      id="experience" 
      className="min-h-screen bg-black text-white relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: `${mousePosition.x * 0.05}px`,
            top: `${mousePosition.y * 0.05}px`,
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl transition-all duration-1000"
          style={{
            right: `${mousePosition.x * 0.03}px`,
            bottom: `${mousePosition.y * 0.03}px`,
          }}
        />
        
        {/* Matrix-like grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] sm:bg-[size:100px_100px] bg-[size:50px_50px] animate-pulse"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400/30 rotate-45 animate-bounce"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-purple-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-32 w-3 h-3 bg-pink-400/30 rotate-12 animate-spin"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block relative">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 relative leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Professional
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Experience
              </span>
              {/* Decorative elements */}
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-4 h-4 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-3 h-3 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
            </h2>
            <div className="h-1 sm:h-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full animate-pulse"></div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 mt-6 sm:mt-8 max-w-2xl mx-auto px-4">
            Crafting digital experiences with cutting-edge technologies
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`group relative w-full ${
                index % 2 === 0 
                  ? 'lg:pr-8' 
                  : 'lg:pl-8 lg:ml-auto'
              } lg:w-11/12`}
              onMouseEnter={() => setActiveCard(exp.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Main Card */}
              <div className={`
                relative p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-sm border border-gray-800
                bg-gradient-to-br from-gray-900/50 to-black/50
                transition-all duration-700 ease-out
                hover:bg-gradient-to-br hover:from-gray-800/60 hover:to-gray-900/60
                hover:border-gray-600 hover:shadow-2xl
                ${activeCard === exp.id ? 'transform scale-[1.01] sm:scale-[1.02]' : ''}
              `}>
                {/* Subtle Inner Glow */}
                <div className={`
                  absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700
                  bg-gradient-to-r ${exp.gradientFrom} ${exp.gradientTo}
                `}></div>

                {/* Floating Particles */}
                <FloatingParticles color={exp.glowColor} isActive={activeCard === exp.id} />

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 sm:mb-8">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <FaBriefcase className={`text-lg sm:text-xl lg:text-2xl bg-gradient-to-r ${exp.gradientFrom} ${exp.gradientTo} bg-clip-text text-transparent`} />
                          <span className={`
                            px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold
                            ${exp.status === 'current' 
                              ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-black' 
                              : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white'
                            }
                          `}>
                            {exp.status === 'current' ? 'CURRENT' : 'PREVIOUS'}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-white group-hover:text-gray-200 transition-colors duration-500 leading-tight">
                        {exp.company}
                      </h3>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400 mb-4">
                        <span className="text-lg sm:text-xl font-semibold text-white group-hover:text-gray-200 transition-colors duration-500">{exp.role}</span>
                        <span className="text-sm hidden sm:inline">•</span>
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="text-sm" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>

                      {/* Project Link */}
                      {exp.project && (
                        <a
                          href={exp.project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`
                            inline-flex items-center gap-2 text-base sm:text-lg font-semibold
                            bg-gradient-to-r ${exp.gradientFrom} ${exp.gradientTo} bg-clip-text text-transparent
                            hover:scale-105 transition-transform duration-300
                          `}
                        >
                          {exp.project.name}
                          <FaExternalLinkAlt className="text-sm" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-4 sm:space-y-6">
                    {exp.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className={`
                          group/item flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl
                          bg-gradient-to-r from-gray-900/30 to-black/30 backdrop-blur-sm
                          border border-gray-800
                          transition-all duration-500 ease-out
                          hover:bg-gradient-to-r hover:from-gray-800/40 hover:to-gray-900/40
                          hover:border-gray-600 hover:transform hover:scale-[1.01] sm:hover:scale-[1.02]
                          hover:shadow-lg
                        `}
                      >
                        {/* Icon */}
                        <div className={`
                          p-3 sm:p-4 rounded-xl bg-gradient-to-r ${exp.gradientFrom} ${exp.gradientTo}
                          shadow-lg transition-all duration-500 flex-shrink-0
                          group-hover/item:shadow-xl group-hover/item:scale-110
                          group-hover/item:brightness-110
                        `}>
                          <achievement.icon className="text-lg sm:text-xl text-white" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-200 leading-relaxed text-base sm:text-lg group-hover/item:text-gray-100 transition-colors duration-500">
                            {achievement.text.split(achievement.highlight).map((part, i) => (
                              <span key={i}>
                                {part}
                                {i < achievement.text.split(achievement.highlight).length - 1 && (
                                  <span className={`
                                    font-bold bg-gradient-to-r ${exp.gradientFrom} ${exp.gradientTo} 
                                    bg-clip-text text-transparent
                                  `}>
                                    {achievement.highlight}
                                  </span>
                                )}
                              </span>
                            ))}
                          </p>
                          
                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2 mt-3 sm:mt-4">
                            {achievement.tech.map((tech, techIdx) => (
                              <span
                                key={techIdx}
                                className={`
                                  px-2 sm:px-3 py-1 rounded-full text-xs font-medium
                                  bg-gray-800/50 text-gray-300 border border-gray-700
                                  transition-all duration-300
                                  hover:bg-gray-700/60 hover:text-gray-200 hover:border-gray-600
                                  hover:scale-105 hover:shadow-sm
                                `}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle border enhancement on hover */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none border border-gray-600"></div>
              </div>

              {/* Connection Line */}
              {index < experiences.length - 1 && (
                <div className="flex justify-center mt-6 sm:mt-8">
                  <div className="w-0.5 sm:w-1 h-8 sm:h-12 lg:h-16 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;