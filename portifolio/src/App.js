import { useLayoutEffect } from 'react';
import './App.css';
import Projetos from './componentes/navegacao/projetos';
import Nav from './componentes/navegacao';
import Apresentacao from './componentes/navegacao/apresentacao';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function App() {
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
   gsap.to('.apresentation-section', {
    x:0,
    opacity:1,
    ScrollTrigger:{
      trriger:'.apresentation-section',
      markers: true, 
      start: 'top 400px',
      end: 'bottom 600px'
    }
   }) 
   return () => {
    gsap.killTweensOf('.apresentation-sectiond')
   }
  })

  return (
    <div className='app'>
      <Nav />
    <section className='apresentation-section'>
        <Apresentacao />
        < Projetos />
    </section>
    </div>
  );
}

export default App;
