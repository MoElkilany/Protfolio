import { motion } from 'framer-motion';
import MyMT from '../assets/MyMT.png';
import DGA from '../assets/DGA.png';
import SCISP from '../assets/SCISP.png';
import TGA from '../assets/TGA.jpg';
import ZATCA from '../assets/ZATCA.png';
import NCGR from '../assets/NCGR.png';
import Bazzarry from '../assets/Bazzarry.png';
import Alrajhi from '../assets/alrajhi.png';

const enterpriseProjects = [
  {
    id: 1,
    title: 'My MT',
    fullName: 'Ministry of Tourism',
    subtitle: 'Native iOS',
    description: 'A secure enterprise-grade mobile application developed for the Ministry of Tourism in Saudi Arabia, focused on internal operations and workforce enablement. The app delivers high-performance native experiences with strict compliance to security and data governance standards.',
    tags: ['Swift', 'SwiftUI', 'HealthKit'],
    image: MyMT,
  },
  {
    id: 2,
    title: 'DGA',
    fullName: 'Digital Government Authority',
    subtitle: 'Native iOS',
    description: 'A government-focused digital platform designed for the Digital Government Authority to streamline internal processes and enhance operational efficiency across departments. Built using native iOS technologies to ensure performance, scalability, and seamless integration with existing government systems.',
    tags: ['Swift', 'SwiftUI', 'REST APIs'],
    image: DGA,
  },
  {
    id: 3,
    title: 'SCISP',
    fullName: 'Saudi Center for International Strategic Partnerships',
    subtitle: 'Native iOS',
    description: 'A mission-critical application developed for the Saudi Center for International Strategic Partnerships, supporting complex workflows and secure data handling. Engineered with a strong emphasis on reliability, performance, and enterprise-level architecture.',
    tags: ['Swift', 'SwiftUI', 'Security'],
    image: SCISP,
  },
  {
    id: 4,
    title: 'TGA',
    fullName: 'Transport General Authority',
    subtitle: 'Flutter',
    description: 'A cross-platform mobility solution developed for the Saudi Transport General Authority, enabling taxi and driver ecosystem management. The app ensures smooth user experience across platforms while integrating with national transport regulations and backend systems.',
    tags: ['Flutter', 'Firebase', 'Maps'],
    image: TGA,
  },
  {
    id: 5,
    title: 'ZATCA',
    fullName: 'Zakat, Tax and Customs Authority',
    subtitle: 'Flutter',
    description: 'A large-scale fintech-related mobile application built for the Zakat, Tax and Customs Authority in Saudi Arabia. Focused on delivering secure, scalable, and user-friendly experiences aligned with financial regulations and compliance standards.',
    tags: ['Flutter', 'iOS', 'REST APIs'],
    image: ZATCA,
  },
  {
    id: 6,
    title: 'NCGR',
    fullName: 'National Center for Government Resources',
    subtitle: 'Native iOS',
    description: 'An advanced committee and decision-management system tailored for the National Center for Government Resources. The app facilitates structured workflows, approvals, and collaboration in a highly secure environment using native iOS capabilities.',
    tags: ['Swift', 'SwiftUI', 'Enterprise'],
    image: NCGR,
  },
];

const publicProjects = [
  {
    id: 1,
    title: 'Bazzary',
    fullName: 'Bazzary E-commerce',
    subtitle: 'E-commerce',
    description: 'A fast-growing super app providing e-commerce, delivery, and digital payment solutions.',
    tags: ['Swift', 'SwiftUI', 'iOS'],
    image: Bazzarry,
    appStore: 'https://apps.apple.com/eg/app/bazzarry-%D8%A8%D8%A7%D8%B2%D8%A7%D8%B1%D9%8A/id1631702675',
    country: 'Yemen',
  },
  {
    id: 2,
    title: 'Alrajhi',
    fullName: 'Alrajhi For Urban Projects',
    subtitle: 'Flutter',
    description: 'A modern mobile solution supporting urban development and project management workflows.',
    tags: ['Flutter', 'iOS', 'Android'],
    image: Alrajhi,
    appStore: 'https://apps.apple.com/eg/app/%D8%A7%D9%84%D8%B1%D8%A7%D8%AC%D8%AD%D9%8A/id6757990415',
    country: 'Egypt',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ProjectCard = ({ project, isEnterprise }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -8, transition: { duration: 0.2 } }}
    className={`group relative overflow-hidden rounded-3xl transition-all duration-300 ${
      isEnterprise 
        ? 'bg-gradient-to-br from-[#1a1f35] via-[#151a28] to-[#0d1119] border border-amber-500/20' 
        : 'bg-surface border border-border'
    }`}
  >
    <div className="relative p-6">
      <div className="relative z-10">
        <div className={`w-full h-40 rounded-2xl mb-4 flex items-center justify-center overflow-hidden ${
          isEnterprise ? 'bg-gradient-to-br from-amber-500/10 to-transparent' : 'bg-gradient-to-br from-primary/10 to-transparent'
        }`}>
          <img 
            src={project.image} 
            alt={project.title}
            className="w-28 h-28 object-contain drop-shadow-xl"
          />
        </div>

        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className={`text-lg font-bold ${
              isEnterprise ? 'text-amber-50' : 'text-textPrimary'
            }`}>
              {project.title}
            </h3>
            {project.fullName && (
              <p className={`text-sm ${isEnterprise ? 'text-amber-400/70' : 'text-textMuted'}`}>
                {project.fullName}
              </p>
            )}
            <p className={`text-xs mt-1 ${
              isEnterprise ? 'text-amber-400/50' : 'text-textMuted'
            }`}>
              {project.subtitle}
            </p>
          </div>
          {isEnterprise && (
            <span className="shrink-0 px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full">
              <span className="text-xs font-semibold text-amber-400">KSA</span>
            </span>
          )}
          {!isEnterprise && project.country && (
            <span className="shrink-0 px-2.5 py-1 bg-accent/10 border border-accent/30 rounded-full">
              <span className="text-xs font-semibold text-accent">{project.country}</span>
            </span>
          )}
        </div>

        <p className={`text-sm leading-relaxed mb-4 line-clamp-2 ${
          isEnterprise ? 'text-amber-100/60' : 'text-textSecondary'
        }`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className={`text-xs font-medium px-3 py-1 rounded-lg ${
                isEnterprise 
                  ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20' 
                  : 'bg-primary/10 text-primary border border-primary/10'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {isEnterprise && (
          <div className="mt-4 pt-4 border-t border-amber-500/10">
            <p className="text-xs text-amber-400/40">
              Government Project
            </p>
          </div>
        )}

        {!isEnterprise && project.appStore && (
          <a 
            href={project.appStore} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center w-10 h-10 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.02.41-2.11 1.05-2.91l-.01-.01z"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section className="py-28 px-6 bg-background" id="projects">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-textPrimary tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-textSecondary mt-4 max-w-2xl mx-auto">
            Building powerful mobile experiences for enterprise and public audiences
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-xl border border-amber-500/20">
              <span className="text-amber-400 font-semibold">Enterprise Apps</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enterpriseProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isEnterprise={true} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-xl border border-accent/20">
              <span className="text-accent font-semibold">Public Apps</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {publicProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isEnterprise={false} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
