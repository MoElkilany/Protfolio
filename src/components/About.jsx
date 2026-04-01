const About = () => {
  const achievements = [
    { icon: 'emoji_events', text: 'ECPC 2018 Qualifications Round (37th Place)' },
    { icon: 'lightbulb', text: "Vodafone's Innovation Hackathon (Top 10 among 230 ideas)" },
  ];

  return (
    <section className="py-24 px-8 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-highest relative">
            <img 
              alt="Professional Portrait" 
              className="w-full h-full object-cover grayscale opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnI6J4tKsexRxHH3jzFGiotF_RV6akOaa9bUXwyRte55KwrPjOWD4qT9gGIWtxOHbUFbz5ayQPImr6JSZyIpNi8NZRmDxiTSLiDG9uAQ2TEKJTL7Vu-In4EwUxUlD3Q5AWAJqTsBqy2klfwgtysTedQPWckCVg39zoj5dZfSCE01pbXEsOpOlspGPXllch0HClUG5xv27CarqpKVExPTm_Y--nzkrFvIc9PRRWwlc1oXJxypmCBADOnfnK6_JCkIvPi6SWIK61FO-g"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
          <div className="absolute -bottom-6 -right-6 p-6 glass-card rounded-xl border-primary/20">
            <p className="font-headline text-3xl font-bold text-primary">5+</p>
            <p className="font-label text-xs uppercase tracking-tighter text-on-surface-variant">Years Experience</p>
          </div>
        </div>
        
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">
            Technical <span className="text-primary italic">Foundation</span> & Background
          </h2>
          
          <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
            <p>
              I build intuitive digital products that live in people's pockets. My career is dedicated to mastering the mobile ecosystem, from memory management and smooth animations to robust CI/CD pipelines.
            </p>
            
            <div className="p-6 bg-surface-container rounded-xl border border-outline-variant/10">
              <h4 className="font-headline font-bold text-on-surface mb-2">Education</h4>
              <p className="text-sm font-label uppercase tracking-widest text-primary mb-1">Mansoura University</p>
              <p className="text-on-surface">Bachelor of Computer Science & Information Science</p>
              <p className="text-sm text-on-surface-variant mt-2">2016 — 2020 | Grade: Very Good | Graduation Project: Excellent</p>
            </div>
            
            <div className="p-6 bg-surface-container rounded-xl border border-outline-variant/10">
              <h4 className="font-headline font-bold text-on-surface mb-2">Key Achievements</h4>
              <ul className="space-y-2 text-sm">
                {achievements.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-sm">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;