import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'prakyathnandiigam18@gmail.com',
      href: 'mailto:prakyathnandiigam18@gmail.com',
      color: 'text-cyan-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/prakyath006',
      href: 'https://github.com/prakyath006',
      color: 'text-purple-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'in/nandigam-prakyath',
      href: 'https://www.linkedin.com/in/nandigam-prakyath',
      color: 'text-blue-400'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@prakyath_nandigam',
      href: 'https://www.instagram.com/prakyath_nandigam?igsh=MTVsdG1zNTdjcnFybA==',
      color: 'text-pink-400'
    },
  ];

  return (
    <section id="contact" className="py-24 bg-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's build something amazing together.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">
                  Connect With Me
                </h3>
                <p className="text-muted-foreground max-w-xl mb-12">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </p>

                <div className="grid md:grid-cols-2 gap-4 w-full">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="group/item flex items-center p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                    >
                      <div className={`p-3 rounded-lg bg-background ${link.color} shadow-sm group-hover/item:scale-110 transition-transform duration-300`}>
                        <link.icon size={24} />
                      </div>
                      <div className="ml-4 text-left">
                        <p className="text-sm text-muted-foreground font-medium mb-0.5">
                          {link.label}
                        </p>
                        <p className="font-medium flex items-center gap-2">
                          Connect
                          <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
