import { motion } from 'framer-motion';
import MyMT from '../assets/MyMT.png';
import DGA from '../assets/DGA.png';
import SCISP from '../assets/SCISP.png';
import TGA from '../assets/TGA.jpg';
import ZATCA from '../assets/ZATCA.png';
import NCGR from '../assets/NCGR.png';
import Bazzarry from '../assets/Bazzarry.png';
import Alrajhi from '../assets/alrajhi.png';
import Sawa from '../assets/sawa.jpeg';
import Haqiba from '../assets/haqiba.jpeg';

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
  {
    id: 7,
    title: 'NCGR',
    fullName: 'National Center for Government Resource Systems',
    subtitle: 'Financial System',
    description: 'A financial system application manages and tracks financial activities like transactions, budgeting, and reporting, helping ensure accuracy and better decision-making.',
    tags: ['Swift', 'SwiftUI', 'Financial'],
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
    tags: ['Flutter', 'Android'],
    image: Alrajhi,
    appStore: 'https://apps.apple.com/eg/app/%D8%A7%D9%84%D8%B1%D8%A7%D8%AC%D8%AD%D9%8A/id6757990415',
    playStore: 'https://play.google.com/store/apps/details?id=com.alrajhi.realestate',
    country: 'Egypt',
  },
  {
    id: 3,
    title: 'حقيبة',
    fullName: 'حقيبة للمعلمين',
    subtitle: 'Flutter',
    description: 'A comprehensive educational platform designed for teachers, enabling seamless classroom management, assignment distribution, and student engagement through an intuitive mobile experience.',
    tags: ['Flutter', 'Android'],
    image: Haqiba,
    appStore: 'https://apps.apple.com/eg/app/%D8%AD%D9%82%D9%8A%D8%A8%D8%A9-%D9%84%D9%84%D9%85%D8%B9%D9%84%D9%85%D9%8A%D9%86/id6749434823',
    playStore: 'https://play.google.com/store/apps/details?id=com.hakebaa.educare.pro&pli=1',
    country: 'Kuwait',
  },
  {
    id: 4,
    title: 'Sawa Travel',
    fullName: 'Sawa Travel',
    subtitle: 'Flutter',
    description: 'A modern travel companion app built with Flutter, offering seamless trip planning, booking, and exploration experiences across platforms.',
    tags: ['Flutter', 'Android'],
    image: Sawa,
    appStore: 'https://apps.apple.com/eg/app/sawa-travel/id6754842453',
    playStore: 'https://play.google.com/store/apps/details?id=com.sawa.travel&pcampaignid=web_share',
    country: 'Kuwait',
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
    whileHover={{ y: -6, transition: { duration: 0.3 } }}
    className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
      isEnterprise 
        ? 'bg-white dark:bg-white/5 border border-amber-500/30'
        : 'bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-700 shadow-xl shadow-primary/5'
    }`}
  >
    <div className="relative h-56 overflow-hidden">
      {project.image ? (
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <div className={`w-full h-full bg-gradient-to-br ${project.gradient}`} />
      )}
      <div className={`absolute inset-0 ${
        isEnterprise 
          ? 'bg-gradient-to-br from-black/60 via-black/50 to-black/60' 
          : 'bg-gradient-to-br from-black/60 via-black/50 to-black/60'
      }`} />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20" />
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
      
      <div className="absolute top-4 right-4 flex gap-2">
        {isEnterprise ? (
          <span className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full">
            <span className="text-xs font-bold text-white">KSA</span>
          </span>
        ) : project.country && (
          <span className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full">
            <span className="text-xs font-bold text-white">{project.country}</span>
          </span>
        )}
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-xs font-medium px-2 py-0.5 rounded-md ${
            isEnterprise ? 'bg-amber-300/30 text-amber-100' : 'bg-primary-300/30 text-primary-100'
          }`}>
            {project.subtitle}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>
        {project.fullName && (
          <p className="text-sm text-white/70 mt-1">
            {project.fullName}
          </p>
        )}
      </div>
    </div>

    <div className="p-5">
      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span 
            key={tag} 
            className={`text-xs font-medium px-3 py-1.5 rounded-lg ${
              isEnterprise 
                ? 'bg-amber-50 text-amber-700 border border-amber-200' 
                : 'bg-primary-50 text-primary-700 border border-primary-200'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
        {isEnterprise ? (
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Government Project
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            {project.appStore && (
              <a 
                href={project.appStore} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.02.41-2.11 1.05-2.91l-.01-.01z"/>
                </svg>
                <span className="text-xs font-medium">App Store</span>
              </a>
            )}
            {project.playStore && (
              <a 
                href={project.playStore} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.283 14.025l8.635-8.635-2.302-2.302-6.333 10.937z"/>
                </svg>
                <span className="text-xs font-medium">Google Play</span>
              </a>
            )}
          </div>
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
              <span className="text-amber-600 dark:text-amber-400 font-semibold">Enterprise Apps</span>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
