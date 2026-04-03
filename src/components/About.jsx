import { motion } from 'framer-motion';

const About = () => {
  const achievements = [
    { icon: 'emoji_events', text: 'ECPC 2018 Qualifications Round (37th Place)' },
    { icon: 'lightbulb', text: "Vodafone's Innovation Hackathon (Top 10 among 230 ideas)" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-28 px-6 bg-surface" id="about">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-textPrimary tracking-tight">
              About <span className="text-gradient">Me</span>
            </h2>
          </motion.div>
          
          <motion.div variants={itemVariants} className="space-y-6 text-lg text-textSecondary leading-relaxed">
            <p>
              I build intuitive digital products that live in people's pockets. My career is dedicated to mastering the mobile ecosystem, from memory management and smooth animations to robust CI/CD pipelines.
            </p>
            
            <div className="p-6 bg-surfaceElevated rounded-xl border border-border">
              <h4 className="font-semibold text-textPrimary mb-3">Education</h4>
              <p className="text-sm text-primary uppercase tracking-wider mb-1">Mansoura University</p>
              <p className="text-textSecondary">Bachelor of Computer Science & Information Science</p>
              <p className="text-sm text-textMuted mt-2">2016 — 2020 | Grade: Very Good | Graduation Project: Excellent</p>
            </div>
            
            <div className="p-6 bg-surfaceElevated rounded-xl border border-border">
              <h4 className="font-semibold text-textPrimary mb-3">Key Achievements</h4>
              <ul className="space-y-3">
                {achievements.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="material-symbols-outlined text-primary text-lg">{item.icon}</span>
                    <span className="text-textSecondary text-sm">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
