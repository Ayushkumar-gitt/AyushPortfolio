import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section className="py-24 border-b border-border/10" id="education">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
        
        {/* Education */}
        <div>
          <h2 className="text-xl uppercase font-anton tracking-widest text-foreground mb-12 m-0">Education</h2>
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-foreground m-0">Master of Computer Applications (MCA)</h3>
              <p className="text-primary mt-1 mb-3">Birla Institute of Technology, Mesra</p>
              <p className="text-muted-foreground">2025 – 2027 (Ongoing)</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-foreground m-0">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-primary mt-1 mb-3">B.R.A. Bihar University, Bihar</p>
              <p className="text-muted-foreground">2022 – 2025 (71%)</p>
            </motion.div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-xl uppercase font-anton tracking-widest text-foreground mb-12 m-0">Certifications</h2>
          <ul className="space-y-6">
            <motion.li 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <span className="mt-1.5 size-2 rounded-full bg-primary shrink-0"></span>
              <span className="text-xl text-foreground/90">Oracle Certified Foundations Associate</span>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-4"
            >
              <span className="mt-1.5 size-2 rounded-full bg-primary shrink-0"></span>
              <span className="text-xl text-foreground/90">Goldman Sachs Software Engineering Virtual Experience Program</span>
            </motion.li>
          </ul>
        </div>

      </div>
    </section>
  );
}
