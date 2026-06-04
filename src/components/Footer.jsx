import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background-light py-20 relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-anton tracking-widest mb-6"
        >
          WHAT'S NEXT?
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-anton text-foreground mb-12"
        >
          LET'S WORK TOGETHER
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a 
            href="mailto:raj309457@gmail.com" 
            className="group inline-flex items-center gap-4 text-2xl md:text-4xl text-foreground hover:text-primary transition-colors"
          >
            raj309457@gmail.com
            <span className="size-10 md:size-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowUpRight size={24} />
            </span>
          </a>
        </motion.div>

        <div className="mt-32 pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground">
          <p>© {new Date().getFullYear()} Ayush Kumar. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com/Ayushkumar-gitt" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/ayush-kumar-60b667231" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
