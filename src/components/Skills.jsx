import { motion } from 'framer-motion';
import { Layers, Network, Bot, Cpu } from 'lucide-react';

export default function Skills() {
  const frontend = [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
  ];
  
  const backend = [
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", invertDark: true },
    { name: "REST APIs", fallbackIcon: <Network className="w-6 h-6 text-foreground" /> }
  ];
  
  const database = [
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" }
  ];
  
  const aiDevops = [
    { name: "LangChain", fallbackIcon: <Cpu className="w-6 h-6 text-foreground" /> },
    { name: "LLMs / RAG", fallbackIcon: <Bot className="w-6 h-6 text-foreground" /> },
    { name: "Git & GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", invertDark: true },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" }
  ];

  const SkillCategory = ({ title, skills }) => (
    <div className="grid sm:grid-cols-12 gap-8 mb-20">
      <div className="sm:col-span-5">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-anton text-muted-foreground uppercase m-0"
        >
          {title}
        </motion.p>
      </div>
      <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
        {skills.map((skill, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-3.5 items-center"
          >
            <div className="size-12 rounded flex items-center justify-center bg-transparent">
              {skill.icon ? (
                <img src={skill.icon} alt={skill.name} className={`w-10 h-10 object-contain ${skill.invertDark ? 'invert brightness-0 dark:invert-100 dark:brightness-200' : ''}`} />
              ) : (
                skill.fallbackIcon
              )}
            </div>
            <span className="text-2xl text-foreground capitalize">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-24 border-b border-border/10 relative z-10" id="my-stack">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-20">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="text-primary size-8 flex items-center justify-center"
          >
            <Layers size={32} strokeWidth={1} />
          </motion.div>
          <h2 className="text-xl uppercase font-anton tracking-widest text-foreground m-0">My Stack</h2>
        </div>
        
        <div>
          <SkillCategory title="frontend" skills={frontend} />
          <SkillCategory title="backend" skills={backend} />
          <SkillCategory title="database" skills={database} />
          <SkillCategory title="AI & Tools" skills={aiDevops} />
        </div>
      </div>
    </section>
  );
}
