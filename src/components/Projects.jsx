import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'DGA App',
    description: 'Digital Government Authority app for KSA employees. Built with SwiftUI and MVVM pattern for seamless data flow.',
    icon: 'account_balance',
    tags: ['SwiftUI', 'MVVM', 'Unit Testing'],
  },
  {
    id: 2,
    title: 'My MT App',
    description: 'Ministry of Tourism (KSA) employee app. Integrates HealthKit for physical data and Apple Wallet for Digital Cards.',
    icon: 'card_travel',
    tags: ['UIKit', 'HealthKit', 'Apple Wallet'],
  },
  {
    id: 3,
    title: 'TGA Taxi / Driver',
    description: 'Uber-like Flutter application for ride-hailing and driver management, featuring real-time chat and multi-language support.',
    icon: 'local_taxi',
    tags: ['Flutter', 'Firebase', 'Maps'],
  },
  {
    id: 4,
    title: 'Religious Literacy Apps',
    description: 'Developed "Kitab Tahdhib al-Lisan" and "Kitab al-Juz\' al-Rashidi" as charity projects for Alilm wa Alirfan Foundation.',
    icon: 'menu_book',
    tags: ['Flutter', 'iOS', 'App Store'],
  },
];

const filterButtons = ['All Apps', 'iOS Native', 'Flutter'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All Apps');

  return (
    <section className="py-24 px-8" id="projects">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">
            Technical <span className="text-primary">Showcase</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-2 bg-surface-container p-1 rounded-full border border-outline-variant/20">
            {filterButtons.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-label text-sm font-bold transition-colors ${
                  activeFilter === filter
                    ? 'bg-primary text-on-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-surface-container rounded-xl overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all flex flex-col"
            >
              <div className="aspect-video relative overflow-hidden bg-slate-800 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-6xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </span>
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-8 space-y-4 flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-headline font-bold">{project.title}</h3>
                  <span className="material-symbols-outlined text-primary">open_in_new</span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-label font-bold text-primary-fixed uppercase tracking-tighter px-2 py-1 bg-primary/10 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;