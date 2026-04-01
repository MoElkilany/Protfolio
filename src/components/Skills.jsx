const Skills = () => {
  const coreTechnologies = [
    'Swift', 'SwiftUI / UIKit', 'Dart / Flutter', 'Bloc / Riverpod', 'SwiftData / Realm', 'Alamofire'
  ];

  const architectureTools = [
    'Clean Architecture', 'MVVM / MVP / TCA', 'CI/CD (Fastlane)', 'Git / Firebase', 'Agora Real-Time', 'HealthKit / Google Maps'
  ];

  const softSkills = [
    'Teamwork & Collaborating',
    'Communication & Consistency',
    'Presentation & Supervision',
    'Respectful Professionalism',
  ];

  const languages = [
    { name: 'Arabic', proficiency: 'Native' },
    { name: 'English', proficiency: 'Limited working proficiency' },
  ];

  return (
    <section className="py-24 px-8" id="skills">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">
            The Precision <span className="text-primary">Toolkit</span>
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            A comprehensive blend of native and cross-platform engineering skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-surface-container-high space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">code</span>
              </div>
              <h3 className="text-2xl font-headline font-bold">Technical Stack</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-3">Core Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {coreTechnologies.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded bg-secondary-container text-on-secondary-container font-label text-xs uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-3">Architecture & Tools</h4>
                <div className="flex flex-wrap gap-3">
                  {architectureTools.map((tool) => (
                    <span key={tool} className="px-3 py-1.5 rounded bg-primary/10 text-primary font-label text-xs uppercase tracking-wider">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-xl bg-surface-container-high space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary">groups</span>
              </div>
              <h3 className="text-2xl font-headline font-bold">Soft Skills & Languages</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Interpersonal</h4>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  {softSkills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Languages</h4>
                <div className="space-y-3">
                  {languages.map((lang) => (
                    <div key={lang.name}>
                      <p className="text-sm font-bold text-on-surface">{lang.name}</p>
                      <p className="text-xs text-on-surface-variant">{lang.proficiency}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;