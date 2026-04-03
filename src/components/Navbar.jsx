import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Senior Mobile Engineer (iOS - Flutter)';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
      setProgress(scrollProgress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'py-5 bg-transparent'
      }`}
    >
      <motion.div
        className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-primary via-accent to-primary z-[60] rounded-full"
        style={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
      />
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#"
          className="text-lg font-semibold text-textPrimary tracking-tight font-sans"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          >
            {displayText}
          </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-sm text-textSecondary hover:text-textPrimary transition-colors duration-200"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <a
          href="/Mohamed Elkilany (Mobile Engineer).pdf"
          download="Mohamed Elkilany (Mobile Engineer).pdf"
          className="hidden md:block px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primaryHover transition-colors duration-200 glow-primary"
        >
          Download CV
        </a>

        <button
          className="md:hidden text-textSecondary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-textSecondary hover:text-textPrimary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/Mohamed Elkilany (Mobile Engineer).pdf"
                download="Mohamed Elkilany (Mobile Engineer).pdf"
                className="w-full px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg text-center block"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
