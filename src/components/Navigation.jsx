import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const menuItems = [
    { name: 'Home', id: 'banner', color: 'bg-yellow-500', textColor: 'text-black' },
    { name: 'About Me', id: 'about-me', color: 'bg-blue-500', textColor: 'text-white' },
    { name: 'My Stack', id: 'my-stack', color: 'bg-teal-500', textColor: 'text-black' },
    { name: 'Experience', id: 'experience', color: 'bg-indigo-500', textColor: 'text-white' },
    { name: 'Projects', id: 'projects', color: 'bg-rose-500', textColor: 'text-white' },
    { name: 'Education', id: 'education', color: 'bg-purple-500', textColor: 'text-white' }
  ];

  return (
    <>
      <div className="fixed top-0 w-full z-[50] mix-blend-difference">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="group size-12 absolute top-5 right-5 md:right-10 z-[51]"
          aria-label="Menu Toggle"
        >
          <span className={`inline-block w-3/5 h-0.5 bg-white rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 ${isOpen ? 'rotate-45' : '-translate-y-[5px] md:group-hover:rotate-12'}`}></span>
          <span className={`inline-block w-3/5 h-0.5 bg-white rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 ${isOpen ? '-rotate-45' : 'translate-y-[5px] md:group-hover:-rotate-12'}`}></span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-[40] bg-black/70 pointer-events-auto"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide out menu wrapper */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="fixed top-0 right-0 h-[100dvh] w-[500px] max-w-[calc(100vw-3rem)] z-[45] overflow-hidden gap-y-14 flex flex-col lg:justify-center py-10"
            >
              
              {/* Animated background shape matching the original curve */}
              <motion.div 
                initial={{ x: '50%', borderRadius: '50%' }}
                animate={{ x: '0%', borderRadius: '0%' }}
                exit={{ x: '50%', borderRadius: '50%' }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.76, 0, 0.24, 1], 
                  delay: isOpen ? 0.15 : 0 
                }}
                className="absolute inset-0 scale-150 bg-background-light z-[-1]"
              />

              <div className="grow flex md:items-center w-full max-w-[300px] mx-8 sm:mx-auto">
                <div className="flex gap-10 lg:justify-between max-lg:flex-col w-full">
                  <div className="max-lg:order-2">
                    <p className="text-muted-foreground mb-5 md:mb-8 font-sans text-sm uppercase">SOCIAL</p>
                    <ul className="space-y-3 text-foreground">
                      <li><a href="https://github.com/Ayushkumar-gitt" target="_blank" rel="noreferrer" className="text-lg capitalize hover:underline transition-all">github</a></li>
                      <li><a href="https://linkedin.com/in/ayush-kumar-60b667231" target="_blank" rel="noreferrer" className="text-lg capitalize hover:underline transition-all">linkedin</a></li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-5 md:mb-8 font-sans text-sm uppercase">MENU</p>
                    <ul className="space-y-3">
                      {menuItems.map((item, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ delay: 0.3 + (i * 0.05), duration: 0.5 }}
                        >
                          <button onClick={() => {
                              setIsOpen(false);
                              setTimeout(() => {
                                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                              }, 500);
                            }}
                            className="group text-xl flex items-center gap-3 text-foreground transition-colors w-full text-left"
                          >
                            <span className={`size-3.5 shrink-0 rounded-full flex items-center justify-center group-hover:scale-[200%] transition-all ${item.color} ${item.textColor}`}>
                              <ArrowUpRight strokeWidth={2} className="scale-0 group-hover:scale-100 transition-all w-2 h-2" />
                            </span>
                            <span className="whitespace-nowrap group-hover:translate-x-2 transition-transform duration-300">{item.name}</span>
                          </button>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="w-full max-w-[300px] mx-8 sm:mx-auto text-foreground"
              >
                <p className="text-muted-foreground mb-4 font-sans text-sm uppercase">GET IN TOUCH</p>
                <a href="mailto:raj309457@gmail.com" className="hover:underline transition-all text-lg">raj309457@gmail.com</a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
