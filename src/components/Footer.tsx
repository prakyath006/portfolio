import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Portfolio. Built with passion and creativity.
          </p>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/prakyath006', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/nandigam-prakyath', label: 'LinkedIn' },
              { icon: Instagram, href: 'https://www.instagram.com/prakyath_nandigam?igsh=MTVsdG1zNTdjcnFybA==', label: 'Instagram' },
              { icon: Mail, href: 'mailto:prakyathnandiigam18@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
