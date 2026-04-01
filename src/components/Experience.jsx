const experiences = [
  {
    period: 'July 2021 — Present',
    title: 'Senior Mobile Engineer',
    company: 'Sure International Technology, Saudia Arabia',
    description: 'Leading the development of mission-critical mobile applications for Saudi government and enterprise clients. Architected and delivered production-ready apps with focus on security, performance, and user experience.',
    highlights: [
      'DGA (Digital Government Authority) - Official government employee app serving 50,000+ users',
      'My MT App (Ministry of Tourism) - Employee portal with HealthKit integration and Apple Wallet passes',
      'SCISP - Enterprise resource management application',
      'ZATCA (Zakat, Tax & Customs Authority) - Compliance and reporting platform'
    ],
    tags: ['SwiftUI', 'UIKit', 'MVVM', 'HealthKit', 'Apple Wallet', 'Flutter', 'Unit Testing', 'CI/CD'],
    isActive: true,
  },
  {
    period: 'Dec 2022 — Dec 2023',
    title: 'iOS Reviewer & Instructor',
    company: 'Sprints Academy, Maadi',
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
  return (
    <section className="py-24 px-8 bg-surface-container-low" id="experience">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight leading-none">
            Professional <br/><span className="text-primary">Journey</span>
          </h2>
          <p className="text-on-surface-variant max-w-md">
            Chronology of engineering leadership and contribution across diverse mobile ecosystems.
          </p>
        </div>

        <div className="relative space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative">
              <div className="md:col-span-3 text-on-surface-variant font-label text-sm uppercase tracking-widest pt-2">
                {exp.period}
              </div>
              <div className="md:col-span-1 flex flex-col items-center">
                <div className={`w-4 h-4 rounded-full ${exp.isActive ? 'bg-primary shadow-[0_0_15px_rgba(78,222,163,0.8)]' : 'bg-outline-variant'}`}></div>
                {index < experiences.length - 1 && (
                  <div className="w-0.5 h-full bg-outline-variant/30 mt-4"></div>
                )}
              </div>
              <div className="md:col-span-8 glass-card p-8 rounded-xl space-y-4">
                <h3 className="text-2xl font-headline font-bold">{exp.title}</h3>
                <p className={`${exp.isActive ? 'text-primary' : 'text-on-surface'} font-medium`}>{exp.company}</p>
                <p className="text-on-surface-variant leading-relaxed text-sm">{exp.description}</p>
                {exp.highlights && (
                  <ul className="space-y-2 mt-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-on-surface-variant flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
                {exp.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-[10px] bg-surface-container px-2 py-1 rounded text-on-surface-variant border border-outline-variant/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;