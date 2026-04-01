import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = ['Software Engineer', 'iOS Developer', 'Flutter Developer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (isTyping) {
      timeout = setTimeout(() => {
        if (displayText.length < roles[roleIndex].length) {
          setDisplayText(roles[roleIndex].slice(0, displayText.length + 1));
        } else {
          setTimeout(() => {
            setIsTyping(false);
          }, 1500);
        }
      }, 80);
    } else {
      timeout = setTimeout(() => {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setIsTyping(true);
        }
      }, 40);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[120px]"></div>
      
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-full opacity-30 animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 border border-accent/20 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-surfaceElevated border border-border rounded-full text-sm text-textSecondary mb-6 min-h-[32px]">
            {displayText}
            <span className="inline-block w-0.5 h-4 bg-primary ml-0.5 animate-pulse"></span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-textPrimary tracking-tight leading-tight mb-6"
        >
          Mohamed <span className="text-gradient">Elkilany</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-textSecondary max-w-2xl mx-auto leading-relaxed mb-4"
        >
          Senior iOS Engineer with 5+ years of experience building high-performance apps, with expertise in clean architecture and Flutter for cross-platform solutions.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-textMuted text-sm mb-10"
        >
          <FaMapMarkerAlt className="text-sm" />
          New Cairo, Cairo, Egypt
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primaryHover transition-colors duration-200 glow-primary"
          >
            View Projects
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 border border-border text-textPrimary font-semibold rounded-lg hover:bg-surfaceElevated hover:border-textMuted transition-all duration-200"
          >
            Download CV
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-textMuted flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 12] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-textMuted rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
