import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'https://linkedin.com/in/mohamedelkilany', icon: FaLinkedin, label: 'LinkedIn' },
    { href: 'https://github.com/MoElkilany', icon: FaGithub, label: 'GitHub' },
    { href: 'mailto:mohamedsayedelkilany@gmail.com', icon: FaEnvelope, label: 'Email' },
  ];

  const footerLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-textMuted text-sm">
              Senior Mobile Engineer (iOS - Flutter)
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-textSecondary hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-textSecondary hover:text-primary hover:border-primary transition-all duration-200"
                aria-label={link.label}
              >
                <link.icon className="text-lg" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-textMuted text-sm">
            © {currentYear} Mohamed Elkilany. All rights reserved.
          </p>
          <p className="text-textMuted text-sm">
            Built with <span className="text-accent">React</span> & <span className="text-primary">Tailwind</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
