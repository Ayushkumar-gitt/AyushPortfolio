import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Perplexity Clone",
      subtitle: "AI Research Assistant",
      desc: "Built an AI-powered research assistant with real-time query processing, retrieval-based search, and structured AI-generated responses.",
      tech: ["React.js", "Node.js", "Python", "LangChain", "LLMs", "REST APIs"]
    },
    {
      title: "Snitch",
      subtitle: "Full-Stack E-Commerce Platform",
      desc: "Developed a full-stack e-commerce application with authentication, product management, and RESTful APIs using MERN architecture.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"]
    }
  ];

  return (
    <section className="py-24 border-b border-border/10" id="projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-xl uppercase font-anton tracking-widest text-foreground mb-20 m-0">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative overflow-hidden border border-border/20 p-8 rounded-lg bg-background-light/50 flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
              
              <div className="relative z-10 flex flex-col grow">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-anton text-foreground group-hover:text-primary transition-colors m-0">{project.title}</h3>
                    <p className="text-primary mt-2 font-medium">{project.subtitle}</p>
                  </div>
                  <a href="#" className="size-12 shrink-0 rounded-full bg-background border border-border/20 flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </a>
                </div>
                
                <p className="text-foreground/80 mb-8 grow">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 text-sm rounded-full border border-border/20 bg-background text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
