import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      {/* Visual background grids */}
      <div className="bg-grid" />
      <div className="bg-radial" />

      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
