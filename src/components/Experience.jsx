import { motion } from 'framer-motion';

const experiences = [
  {
    period: 'July 2021 — Present',
    title: 'Senior Mobile Engineer',
    company: 'Sure International Technology, Saudia Arabia',
    years: '4 years',
    description: 'Leading the development of mission-critical mobile applications for Saudi government and enterprise clients. Architected and delivered production-ready apps with focus on security, performance, and user experience.',
    highlights: [
      'DGA (Digital Government Authority) - Official government employee app serving 50,000+ users',
      'My MT App (Ministry of Tourism) - Employee portal with HealthKit integration and Apple Wallet passes',
      'SCISP (Saudi Center for International Strategic Partnerships) - Enterprise resource management application',
      'ZATCA (Zakat, Tax & Customs Authority) - Compliance and reporting platform',
      'NCGR (National Center for Government Resources) - System app for Ministry of Finance',
      'TGA (Transport General Authority) - Transportation authority application'
    ],
    tags: ['SwiftUI', 'UIKit', 'MVVM', 'HealthKit', 'Apple Wallet', 'Flutter', 'Unit Testing', 'CI/CD'],
    isActive: true,
  },
  {
    period: 'Apr 2025 — Apr 2026 (Part-time)',
    title: 'Software Engineer',
    company: 'Bazzary (Super App – E-commerce & Delivery Platform)',
    years: '1 year',
    description: 'Bazzary is a fast-growing super app in Yemen that combines e-commerce, delivery, and digital payments into one platform. Building a unified digital ecosystem that connects users, sellers, and logistics providers.',
    highlights: [
      'UIKit to SwiftUI Migration - Leading the migration of existing iOS codebase from UIKit to SwiftUI for improved performance and maintainability',
      'Bazzary Shop - Local shopping platform connecting users with nearby stores',
      'Bazzary Mart - Daily essentials delivery with quick turnaround',
      'Bazzary Global - International products marketplace',
      'Buy Now, Pay Later (BNPL) - Flexible payment solutions'
    ],
    tags: ['Swift', 'SwiftUI', 'UIKit', 'Native iOS', 'Migration', 'MVVM', 'E-commerce', 'Payments'],
    isActive: false,
  },
  {
    period: 'Dec 2022 — Dec 2023 (Part-time)',
    title: 'iOS Reviewer & Instructor',
    company: 'Sprints Academy, Maadi',
    years: '1 year',
    description: 'Technical educator and code reviewer for iOS development bootcamps. Mentored 100+ junior developers and conducted comprehensive code reviews to ensure best practices and code quality.',
    highlights: [
      'Reviewed 500+ pull requests focusing on Swift best practices',
      'Conducted weekly live coding sessions on SwiftUI and UIKit',
      'Led deployment workshops covering Xcode Cloud and App Store Connect',
      'Mentored students through final capstone projects'
    ],
    tags: ['Swift', 'SwiftUI', 'Xcode', 'iOS', 'Mentoring'],
    isActive: false,
  },
  {
    period: 'Dec 2020 — Jul 2021',
    title: 'Mid iOS Developer',
    company: 'Awammer Elshabaka (Software House)',
    years: '8 months',
    description: 'Full-stack mobile development for diverse client projects. Developed and maintained production apps across multiple domains from e-commerce to services.',
    highlights: [
      'Cafe Station - POS system with real-time order management',
      'Bubbles Laundry - On-demand laundry service app with driver tracking',
      'Mazad KSA - Auction platform with live bidding features',
      'Estjaar - Document verification and approval workflow system'
    ],
    tags: ['iOS', 'Swift', 'REST APIs', 'Firebase', 'Push Notifications'],
    isActive: false,
  },
  {
    period: 'Aug 2019 — Nov 2020',
    title: 'Junior iOS Developer',
    company: 'ELMnassa',
    years: '1 year 4 months',
    description: 'Started career as intern, quickly promoted to junior developer. Gained solid foundation in iOS development working on live production applications.',
    highlights: [
      'Hire App - Job recruitment platform with resume parsing',
      'Turkish Bazar - E-commerce app for Turkish products in Egypt',
      'Learned Swift fundamentals and iOS app lifecycle',
      'Collaborated with senior developers on feature development'
    ],
    tags: ['iOS', 'Swift', 'Xcode', 'Git'],
    isActive: false,
  },
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-28 px-6 bg-surface" id="experience">
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-textPrimary tracking-tight leading-tight">
              Work <span className="text-gradient">Experience</span>
            </h2>
          </motion.div>
          <motion.p variants={itemVariants} className="text-textSecondary max-w-md">
            A consistent history of delivering impactful engineering work across diverse mobile platforms.
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/3 top-0 bottom-0 w-px bg-border"></div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative grid grid-cols-1 md:grid-cols-[1fr_2px_2fr] gap-6 md:gap-8 items-start"
              >
                <div className="absolute left-4 md:left-1/3 -translate-x-1/2 mt-2">
                  <div className={`w-3 h-3 rounded-full ${exp.isActive ? 'bg-primary shadow-[0_0_10px_rgba(99,102,241,0.8)]' : 'bg-border'}`}></div>
                </div>
                
                <div className="pl-10 md:pl-0 md:text-right text-textMuted text-sm font-medium">
                  <div>{exp.period}</div>
                  {exp.years && (
                    <div className="text-primary text-xs mt-1">{exp.years}</div>
                  )}
                </div>
                
                <div className="hidden md:block"></div>
                
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="glass p-6 md:p-8 rounded-2xl space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-xl font-semibold text-textPrimary">{exp.title}</h3>
                    {exp.isActive && (
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full w-fit">
                        Current
                      </span>
                    )}
                  </div>
                  <p className={`font-medium ${exp.isActive ? 'text-primary' : 'text-textSecondary'}`}>{exp.company}</p>
                  <p className="text-textSecondary leading-relaxed text-sm">{exp.description}</p>
                  
                  {exp.highlights && (
                    <ul className="space-y-2 mt-3">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-textMuted flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs px-2.5 py-1 bg-surfaceElevated text-textSecondary rounded-lg border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
