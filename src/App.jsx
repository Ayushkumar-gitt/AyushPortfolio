import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Snowfall from './components/Snowfall';
import Cursor from './components/Cursor';

function App() {
  return (
    <>
      <Cursor />
      <Snowfall />
      <Preloader />
      
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
