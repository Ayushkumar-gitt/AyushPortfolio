import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-24 border-b border-border/10" id="about-me">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-light mb-20 text-foreground"
        >
          I believe in a user-centered design approach, ensuring that every project I work on aligns with specifications while prioritizing the needs and satisfaction of the end user.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="pb-3 border-b border-border/20 text-muted-foreground uppercase tracking-widest text-sm font-anton"
        >
          This is me.
        </motion.p>
        
        <div className="grid md:grid-cols-12 mt-9 gap-8">
          <div className="md:col-span-5">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl font-anton text-foreground m-0"
            >
              Hi, I'm Ayush.
            </motion.p>
          </div>
          <div className="md:col-span-7">
            <div className="text-lg text-muted-foreground max-w-[500px]">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="mb-4"
              >
                I'm a full-stack web developer dedicated to turning ideas into scalable, high-performing solutions. With strong foundations in Data Structures and Algorithms using Java, I specialize in building web applications using modern JavaScript frameworks.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                My approach focuses on creating seamless and intuitive user experiences while implementing robust backend architectures with Node.js and Express. Currently, I am expanding my skill set into Generative AI, LangChain, and scalable web architectures to deliver cutting-edge solutions.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
