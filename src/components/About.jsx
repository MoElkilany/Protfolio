import { motion } from 'framer-motion';
import { FaTrophy, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const achievements = [
    { icon: FaTrophy, text: 'ECPC 2018 Qualifications Round – Ranked 37th' },
    { icon: FaLightbulb, text: "Vodafone Innovation Hackathon – Top 10 out of 230 ideas" },
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
            <p className="text-center max-w-2xl mx-auto">
              Mobile engineer focused on building simple, fast, and user-friendly apps. I care about performance, clean code, and delivering smooth user experiences.
            </p>
            
            <div className="p-6 bg-surfaceElevated rounded-xl border border-border">
              <h4 className="font-semibold text-textPrimary mb-3">Education</h4>
              <p className="text-primary uppercase tracking-wider mb-1">Bachelor of Computer Science & Information Science</p>
              <p className="text-textSecondary">Mansoura University (2016–2020)</p>
              <p className="text-sm text-textMuted mt-2">Grade: Very Good – Graduation Project: Excellent</p>
            </div>
            
            <div className="p-6 bg-surfaceElevated rounded-xl border border-border">
              <h4 className="font-semibold text-textPrimary mb-3">Achievements</h4>
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
                    <item.icon className="text-primary text-lg" />
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
