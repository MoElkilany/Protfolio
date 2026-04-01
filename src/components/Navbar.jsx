import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 dark:bg-[#0b1326]/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(6,14,32,0.4)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <a href="#" className="text-xl font-bold tracking-tighter text-slate-100 dark:text-[#dae2fd] font-headline">
          Mobile Engineer Portfolio
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-400 dark:text-[#bec8d2] font-medium hover:text-emerald-300 dark:hover:text-[#6ffbbe] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-headline px-6 py-2 rounded-full font-bold scale-95 active:scale-90 transition-transform">
          Download CV
        </button>

        <button
          className="md:hidden text-slate-400"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-surface-container p-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-slate-400 dark:text-[#bec8d2] font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;