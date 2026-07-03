import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" id="banner">
      {/* Background SVG Arrow */}
      <svg id="banner-arrow-svg" width="376" height="111" viewBox="0 0 376 111" fill="transparent" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-20 left-1/2 -translate-x-1/2 z-0 opacity-20">
        <path className="svg-arrow svg-arrow-1" d="M1 1V39.9286L188 110V70.6822L1 1Z" stroke="var(--primary)"></path>
        <path className="svg-arrow svg-arrow-2" d="M375 1V39.9286L188 110V70.6822L375 1Z" stroke="var(--primary)"></path>
      </svg>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col relative z-10">
        <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="leading-[.95] text-6xl sm:text-[80px] font-anton font-bold m-0"
          >
            <span className="text-primary">FULL STACK</span><br/>
            <span className="ml-4 text-foreground">DEVELOPER</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mt-6 text-lg text-muted-foreground"
          >
            Hi! I'm <span className="font-medium text-foreground">AYUSH</span>. A passionate Web Developer with strong foundations in full-stack web applications using modern JavaScript frameworks and AI technologies.
          </motion.p>
          
          <motion.a 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="group h-12 px-8 inline-flex justify-center items-center gap-2 text-lg uppercase font-anton tracking-widest outline-none transition-colors relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary-hover mt-9" 
            href="https://drive.google.com/file/d/1l53PX9fcUK_fzXCIQUaQ7IB5kqpTZswh/view?usp=sharing" 
            download 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150"></span>
            <span className="z-[1] group-hover:text-primary transition-colors">Download Resume</span>
          </motion.a>
        </div>
        
        <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}>
            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5 m-0">1</h5>
            <p className="text-muted-foreground text-sm uppercase tracking-wider">Year Experience</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}>
            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5 m-0">2</h5>
            <p className="text-muted-foreground text-sm uppercase tracking-wider">Major Projects</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}>
            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5 m-0">5+</h5>
            <p className="text-muted-foreground text-sm uppercase tracking-wider">Core Tech Skills</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
