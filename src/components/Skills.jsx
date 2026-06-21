import { motion } from 'framer-motion';
import { FaApple } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';
import { FiSettings, FiUsers } from 'react-icons/fi';

const Skills = () => {
  const swiftSkills = [
    'Swift', 'SwiftUI', 'UIKit', 'MVVM / Clean Architecture', 'Combine / RxSwift', 
    'async/await (Swift Concurrency)', 'URLSession / Alamofire', 'Core Data / Realm',
    'Swift Package Manager (SPM)', 'Fastlane / CI-CD', 'XCTest', 'SonarQube'
  ];

  const flutterSkills = [
    'Flutter SDK', 'Material / Cupertino Design', 'BLoC (State Management)', 
    'Dio - http (Networking)', 'Firebase (Auth, Firestore, Push Notifications)', 
    'SharedPreferences (Local Storage)'
  ];

  const architectureTools = [
    'Clean Architecture', 'MVVM', 'MVP', 'CI/CD', 'Fastlane', 'Git', 'Firebase', 'Agora', 'HealthKit', 'Google Maps'
  ];

  const softSkills = [
    'Teamwork & Collaboration',
    'Communication',
    'Presentation',
    'Leadership',
    'Problem Solving',
  ];

  const languages = [
    { name: 'Arabic', proficiency: 'Native' },
    { name: 'English', proficiency: 'Limited Working' },
  ];

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

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <section className="py-28 px-4 md:px-6 bg-background overflow-x-hidden" id="skills">
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center space-y-4"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-textPrimary tracking-tight">
            Skills & <span className="text-gradient">Expertise</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-textSecondary max-w-2xl mx-auto">
            A strong mix of <span className="text-primary font-semibold">Native</span> and <span className="text-accent font-semibold">Cross-Platform</span> mobile development expertise.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 xl:grid-cols-2 gap-8"
        >
          <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-surface border border-border hover:border-primary/50 transition-colors duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-surfaceElevated border border-border flex items-center justify-center">
                <FaApple className="text-textPrimary text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-textPrimary">iOS (SwiftUI)</h3>
                <p className="text-xs text-textMuted">Native Development</p>
              </div>
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-2"
              variants={containerVariants}
            >
              {swiftSkills.map((tech) => (
                <motion.span
                  key={tech}
                  variants={tagVariants}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-3 py-1.5 bg-surfaceElevated text-textSecondary text-sm rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-200 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-surface border border-border hover:border-accent/50 transition-colors duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-surfaceElevated border border-border flex items-center justify-center">
                <SiFlutter className="text-[#42A5F5] text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-textPrimary">Flutter (Dart)</h3>
                <p className="text-xs text-textMuted">Cross-Platform Development</p>
              </div>
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-2"
              variants={containerVariants}
            >
              {flutterSkills.map((tech) => (
                <motion.span
                  key={tech}
                  variants={tagVariants}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-3 py-1.5 bg-accent/10 text-accent text-sm rounded-lg border border-accent/20 hover:border-accent/50 hover:bg-accent/20 transition-all duration-200 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 xl:grid-cols-2 gap-8"
        >
          <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-surface border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-surfaceElevated border border-border flex items-center justify-center">
                <FiSettings className="text-textSecondary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-textPrimary">Architecture & Tools</h3>
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-2"
              variants={containerVariants}
            >
              {architectureTools.map((tool) => (
                <motion.span
                  key={tool}
                  variants={tagVariants}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-3 py-1.5 bg-surfaceElevated text-textSecondary text-sm rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-200 cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-surface border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-surfaceElevated border border-border flex items-center justify-center">
                <FiUsers className="text-textSecondary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-textPrimary">Soft Skills & Languages</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="text-xs text-textMuted uppercase tracking-wider">Interpersonal</h4>
                <ul className="space-y-2">
                  {softSkills.map((skill) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-textSecondary text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-xs text-textMuted uppercase tracking-wider">Languages</h4>
                <div className="space-y-2">
                  {languages.map((lang) => (
                    <motion.div
                      key={lang.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <p className="font-semibold text-textPrimary text-sm">{lang.name}</p>
                      <p className="text-xs text-textMuted">{lang.proficiency}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;