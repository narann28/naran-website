import React, { useRef, useEffect } from 'react';
import './App.css';
import 'boxicons/css/boxicons.min.css';
import Typed from 'typed.js';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
// import Interests from './Components/Interests';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  const el = useRef(null);

  useEffect(() => {
    const initTyped = () => {
      const typed = new Typed(el.current, {
        strings: [
          'Software Developer',
          'UCR Student',
          'Triathlete',
          'Coder'
        ],
        loop: true,
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 800,
      });

      return () => {
        typed.destroy();
      };
    };

    if (el.current) {
      initTyped();
    }
  }, []);

  return (
    <div>
      <Header />
      <Home el={el} />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;