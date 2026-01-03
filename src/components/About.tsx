import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Turning complex ideas into solutions',
  },
  {
    icon: Rocket,
    title: 'Fast Learner',
    description: 'Always exploring new technologies',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborative and communicative',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Get to know me better
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate developer who enjoys solving problems and building 
                software that is simple, clean, and useful. I understand how things 
                work and love turning ideas into working solutions through code.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I mainly work on building scalable applications and exploring how 
                software and artificial intelligence come together. Whether it's 
                designing a user-friendly interface or writing reliable backend logic, 
                I enjoy the entire development process.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently looking for opportunities to learn, collaborate with motivated 
                teams, and contribute to projects that create real-world impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="p-5 rounded-xl bg-card border border-border card-glow transition-all duration-300"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-display font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
