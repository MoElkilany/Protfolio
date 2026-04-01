const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-8 overflow-hidden">
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-tertiary/10 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 space-y-8">
          <div className="space-y-2">
            <span className="font-label text-primary tracking-[0.2em] uppercase text-sm font-semibold">
              Mobile Engineer (iOS - Flutter)
            </span>
            <h1 className="text-6xl md:text-8xl font-headline font-bold text-on-surface tracking-tighter leading-none">
              Mohamed <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-fixed">
                Elkilany
              </span>
            </h1>
            <p className="text-on-surface-variant font-label text-sm pt-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">location_on</span> 
              New Cairo, Cairo
            </p>
          </div>
          
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            With over 5 years of experience as a Mobile Engineer, I specialize in iOS and Flutter development, focused on creating efficient, user-friendly apps. I am eager to apply my skills in building high-quality solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-container rounded-full font-headline font-bold text-lg hover:shadow-[0_0_30px_rgba(78,222,163,0.3)] transition-all"
            >
              View Projects
            </a>
            <button className="px-8 py-4 border border-outline-variant hover:bg-surface-container-highest text-on-surface rounded-full font-headline font-bold text-lg transition-all">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;