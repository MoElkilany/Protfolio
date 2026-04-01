import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: 'mail', label: 'Email', value: 'mohamedsayedelkilany@gmail.com' },
    { icon: 'call', label: 'Phone', value: '+201010012244 / +201009986028' },
    { icon: 'link', label: 'Links', links: [
      { href: 'https://linkedin.com/in/mohamedelkilany', label: 'LinkedIn' },
      { href: 'https://github.com/MoElkilany', label: 'GitHub' },
    ]},
  ];

  return (
    <section className="py-24 px-8 bg-surface-container-lowest" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">
            Let's Build the <span className="text-primary">Next Big Thing</span>
          </h2>
          <p className="text-lg text-on-surface-variant">
            Ready to build high-quality mobile solutions or need an architectural deep-dive? Reach out and let's discuss your project.
          </p>
          
          <div className="space-y-6 pt-4">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant/20">
                  <span className="material-symbols-outlined text-primary">{item.icon}</span>
                </div>
                <div>
                  <p className="text-xs font-label uppercase text-on-surface-variant tracking-widest">{item.label}</p>
                  {item.value && <p className="text-lg font-medium">{item.value}</p>}
                  {item.links && (
                    <div className="flex gap-2">
                      {item.links.map((link) => (
                        <a key={link.label} href={link.href} className="hover:text-primary transition-colors">
                          {link.label}
                        </a>
                      ))}
                      <span className="text-outline-variant">/</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-8 rounded-xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label text-sm uppercase text-on-surface-variant" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary/40 rounded-lg py-3 px-4 text-on-surface transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="font-label text-sm uppercase text-on-surface-variant" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary/40 rounded-lg py-3 px-4 text-on-surface transition-all"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label text-sm uppercase text-on-surface-variant" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary/40 rounded-lg py-3 px-4 text-on-surface transition-all resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-headline font-bold rounded-full text-lg shadow-lg hover:shadow-primary/20 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;