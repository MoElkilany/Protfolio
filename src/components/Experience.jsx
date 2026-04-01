const experiences = [
  {
    period: 'July 2021 — Present',
    title: 'Mobile Engineer',
    company: 'Sure International Technology, Saudia Arabia',
    description: 'Lead development of mission-critical applications including DGA (Digital Government Authority), My MT App (Tourism), SCISP, and ZATCA. Built native iOS solutions with SwiftUI/MVVM and cross-platform apps with Flutter.',
    tags: ['SwiftUI', 'HealthKit', 'Apple Wallet', 'Unit Testing'],
    isActive: true,
  },
  {
    period: 'Dec 2022 — Dec 2023',
    title: 'iOS Reviewer & Instructor',
    company: 'Sprints, Maadi',
    description: 'Assisting students in learning app production, reviewing iOS bootcamp modules, and teaching deployment processes via Xcode and App Store Connect.',
    tags: [],
    isActive: false,
  },
  {
    period: 'Dec 2020 — Jul 2021',
    title: 'Mid iOS Developer',
    company: 'Awammer Elshabaka',
    description: 'Developed and maintained various software house applications including Cafe Station, Bubbles Laundry, Mazad KSA, and Estjaar.',
    tags: [],
    isActive: false,
  },
  {
    period: 'Aug 2019 — Nov 2020',
    title: 'Junior iOS Developer (Internship)',
    company: 'ELMnassa',
    description: 'Gained practical experience in native iOS development contributing to the Hire App and Turkish Bazar App.',
    tags: [],
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