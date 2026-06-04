import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section className="py-24 border-b border-border/10" id="experience">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-xl uppercase font-anton tracking-widest text-foreground mb-20 m-0">Experience</h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-border/20 p-8 rounded-lg bg-background-light/50 hover:bg-background-light transition-colors"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h3 className="text-3xl font-anton text-primary m-0">Web Developer (Projects)</h3>
              <p className="text-lg text-muted-foreground mt-1">Self-Initiated</p>
            </div>
            <div className="text-left md:text-right mt-4 md:mt-0">
              <p className="text-foreground font-medium">2024 - Present</p>
              <p className="text-muted-foreground">Remote</p>
            </div>
          </div>
          <ul className="space-y-4 text-foreground/80 list-disc list-inside">
            <li>Developed full-stack web applications using React.js, Node.js, and MongoDB.</li>
            <li>Designed RESTful APIs with authentication, validation, and database integration.</li>
            <li>Used Git for version control, debugging, and collaborative workflows.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
