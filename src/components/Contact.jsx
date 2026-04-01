import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [focused, setFocused] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'mohamedsayedelkilany@gmail.com' },
    { icon: FaPhone, label: 'Phone', value: '+201010012244' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'New Cairo, Cairo, Egypt' },
  ];

  const socialLinks = [
    { href: 'https://linkedin.com/in/mohamedelkilany', icon: FaLinkedin, label: 'LinkedIn' },
    { href: 'https://github.com/MoElkilany', icon: FaGithub, label: 'GitHub' },
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

  return (
    <section className="py-28 px-6 bg-surface" id="contact">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-textPrimary tracking-tight">
              Let's Work <span className="text-gradient">Together</span>
            </h2>
            <p className="text-lg text-textSecondary">
              Ready to build high-quality mobile solutions or need an architectural deep-dive? Reach out and let's discuss your project.
            </p>
            
            <div className="space-y-6 pt-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-surfaceElevated border border-border flex items-center justify-center">
                    <item.icon className="text-primary text-lg" />
                  </div>
                  <div>
                    <p className="text-xs text-textMuted uppercase tracking-wider">{item.label}</p>
                    <p className="text-textPrimary font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl bg-surfaceElevated border border-border flex items-center justify-center text-textSecondary hover:text-primary hover:border-primary transition-all duration-200"
                >
                  <link.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-surfaceElevated border border-border space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-textMuted" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-surface border border-border rounded-lg py-3 px-4 text-textPrimary placeholder:text-textMuted focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-textMuted" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-surface border border-border rounded-lg py-3 px-4 text-textPrimary placeholder:text-textMuted focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-textMuted" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  rows="5"
                  className="w-full bg-surface border border-border rounded-lg py-3 px-4 text-textPrimary placeholder:text-textMuted focus:outline-none focus:border-primary transition-colors resize-none"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primaryHover transition-colors duration-200 glow-primary"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
