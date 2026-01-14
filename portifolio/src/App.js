import { useLayoutEffect } from 'react';
import './App.css';
import Projetos from './componentes/projetos';
import Nav from './componentes/navegacao';
import Apresentacao from './componentes/apresentacao';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Habilidades from './componentes/habilidades';
import Footer from './componentes/footer';

function App() {
  /* /*   gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
      gsap.to('.componentes', {
        x: 0,
        opacity: 1,
        ScrollTrigger: {
          trriger: '.apresentation-section',
          markers: true,
          start: 'top 400px',
          end: 'bottom 600px'
        } 
      })
      return () => {
        gsap.killTweensOf('.apresentation-sectiond')
      }
    })*/
  return (
    <div className='app'>
      <Nav />
      <Apresentacao />
      < Projetos />
      < Habilidades />
      < Footer />
    </div>
  );
}

export default App;
