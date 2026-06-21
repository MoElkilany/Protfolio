import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaUser, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [focused, setFocused] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const whatsappMessage = `*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
    window.open(`https://wa.me/201009986028?text=${whatsappMessage}`, '_blank');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'mohamedsayedelkilany@gmail.com' },
    { icon: FaPhone, label: 'Phone', value: '+201009986028' },
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

  const inputVariants = {
    rest: { scale: 1 },
    focus: { scale: 1.01 },
  };

  return (
    <section className="py-28 px-6 bg-surface" id="contact">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-textPrimary tracking-tight">
              Let's Work <span className="text-gradient">Together</span>
            </h2>
            <p className="text-lg text-textSecondary">
              Ready to build high-quality mobile solutions or need an architectural deep-dive? Reach out and let's discuss your project.
            </p>
            
            <div className="space-y-5 pt-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-center gap-5 p-4 rounded-2xl bg-background/50 border border-border/50 hover:border-primary/30 hover:bg-background/80 transition-all duration-300"
                >
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                      <item.icon className="text-primary text-xl" />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-all duration-300 -z-10"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-textMuted uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-textPrimary font-medium text-sm">{item.value}</p>
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
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-[2rem] opacity-30 blur-lg"></div>
              <div className="relative bg-gradient-to-br from-surfaceElevated to-surface p-1 rounded-[2rem]">
                <form onSubmit={handleSubmit} className="p-8 rounded-[1.75rem] bg-surface border border-border/50 space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-textPrimary mb-2">Send a Message</h3>
                    <p className="text-textMuted text-sm">I'd love to hear from you</p>
                  </div>

                  <motion.div 
                    variants={inputVariants}
                    animate={focused === 'name' ? 'focus' : 'rest'}
                    className="relative group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-focus-within:opacity-30 blur transition-all duration-300"></div>
                    <div className="relative flex items-center gap-4 bg-background/50 rounded-xl px-5 py-4 border border-border/50 group-focus-within:border-primary/50 transition-all duration-300">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <FaUser className="text-primary text-sm" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        className="flex-1 bg-transparent text-textPrimary placeholder:text-textMuted focus:outline-none text-sm"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div 
                    variants={inputVariants}
                    animate={focused === 'email' ? 'focus' : 'rest'}
                    className="relative group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-focus-within:opacity-30 blur transition-all duration-300"></div>
                    <div className="relative flex items-center gap-4 bg-background/50 rounded-xl px-5 py-4 border border-border/50 group-focus-within:border-primary/50 transition-all duration-300">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <FaEnvelope className="text-primary text-sm" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        className="flex-1 bg-transparent text-textPrimary placeholder:text-textMuted focus:outline-none text-sm"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div 
                    variants={inputVariants}
                    animate={focused === 'message' ? 'focus' : 'rest'}
                    className="relative group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-focus-within:opacity-30 blur transition-all duration-300"></div>
                    <div className="relative bg-background/50 rounded-xl border border-border/50 group-focus-within:border-primary/50 transition-all duration-300">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        rows="4"
                        className="w-full bg-transparent text-textPrimary placeholder:text-textMuted focus:outline-none p-4 pl-[4.5rem] text-sm resize-none"
                        placeholder="Your Message"
                        required
                      ></textarea>
                      <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full group overflow-hidden"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-xl opacity-50 group-hover:opacity-100 blur transition-all duration-300"></div>
                    <div className="relative flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl transition-all duration-300">
                      <span>Send Message</span>
                      <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
