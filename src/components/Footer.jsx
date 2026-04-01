const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'https://linkedin.com/in/mohamedelkilany', label: 'LinkedIn' },
    { href: 'https://github.com/MoElkilany', label: 'GitHub' },
    { href: 'mailto:mohamedsayedelkilany@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-slate-950 dark:bg-[#060e20] w-full py-12 px-8 tonal-shift-top">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <div className="text-lg font-bold text-slate-200 font-headline">
          Mobile Engineer (iOS - Flutter)
        </div>
        <p className="text-slate-500 dark:text-[#3e4850] font-body text-sm tracking-wide">
          © {currentYear} Mohamed Elkilany. Crafted for Performance.
        </p>
        <div className="flex gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-500 dark:text-[#3e4850] font-medium hover:text-emerald-400 underline-offset-4 hover:underline transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;