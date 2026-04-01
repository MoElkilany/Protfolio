import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'DGA App',
    description: 'Digital Government Authority app for KSA employees. Built with SwiftUI and MVVM pattern for seamless data flow.',
    icon: 'account_balance',
    tags: ['SwiftUI', 'MVVM', 'Unit Testing'],
    stats: '50,000+ users',
  },
  {
    id: 2,
    title: 'My MT App',
    description: 'Ministry of Tourism (KSA) employee app. Integrates HealthKit for physical data and Apple Wallet for Digital Cards.',
    icon: 'card_travel',
    tags: ['UIKit', 'HealthKit', 'Apple Wallet'],
    stats: 'Enterprise',
  },
  {
    id: 3,
    title: 'TGA Taxi / Driver',
    description: 'Uber-like Flutter application for ride-hailing and driver management, featuring real-time chat and multi-language support.',
    icon: 'local_taxi',
    tags: ['Flutter', 'Firebase', 'Maps'],
    stats: 'Real-time',
  },
  {
    id: 4,
    title: 'Religious Literacy Apps',
    description: 'Developed "Kitab Tahdhib al-Lisan" and "Kitab al-Juz\' al-Rashidi" as charity projects for Alilm wa Alirfan Foundation.',
    icon: 'menu_book',
    tags: ['Flutter', 'iOS', 'App Store'],
    stats: 'Charity',
  },
  {
    id: 5,
    title: 'ZATCA Compliance',
    description: 'Zakat, Tax & Customs Authority compliance and reporting platform for businesses in Saudi Arabia.',
    icon: 'description',
    tags: ['Flutter', 'iOS', 'REST APIs'],
    stats: 'Government',
  },
  {
    id: 6,
    title: 'SCISP Enterprise',
    description: 'Enterprise resource management application for Saudi government agencies with secure authentication.',
    icon: 'business',
    tags: ['SwiftUI', 'REST APIs', 'Security'],
    stats: 'Enterprise',
  },
];

const filterButtons = ['All', 'iOS Native', 'Flutter'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : activeFilter === 'iOS Native'
      ? projects.filter(p => p.tags.includes('SwiftUI') || p.tags.includes('UIKit'))
      : projects.filter(p => p.tags.includes('Flutter'));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-28 px-6 bg-background" id="projects">
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row justify-between items-center gap-8"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-textPrimary tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 bg-surface p-1.5 rounded-xl border border-border"
          >
            {filterButtons.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-primary text-white'
                    : 'text-textSecondary hover:text-textPrimary hover:bg-surfaceElevated'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-[0_20px_50px_rgba(99,102,241,0.15)] transition-all duration-300"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-surfaceElevated flex items-center justify-center">
                  <motion.span 
                    className="material-symbols-outlined text-primary text-7xl opacity-15 group-hover:opacity-25 group-hover:scale-110 transition-all duration-500"
                  >
                    {project.icon}
                  </motion.span>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-surface/80 backdrop-blur-sm rounded-full">
                    <span className="text-xs font-medium text-primary">{project.stats}</span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-textPrimary group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <motion.span 
                      className="material-symbols-outlined text-textMuted group-hover:text-primary transition-colors"
                      whileHover={{ scale: 1.2, rotate: 45 }}
                    >
                      open_in_new
                    </motion.span>
                  </div>
                  <p className="text-textSecondary text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
