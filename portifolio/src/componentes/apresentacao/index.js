import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react';
import './apresentacao.css';
const Apresentacao = () => {
    const text = "Estou começando minha carreira como desenvolvedor web e dar vida a projetos únicos. Fique avontade para e explorar meu portfólio!"

    useLayoutEffect(() => {
        gsap.to('.hud-apresentation',{
            x:'0px',
            opacity:1,
        })
        return () =>{
            gsap.killTweensOf('.apresentation')
        }
    })

    
    /*const apresentation = document.querySelector('.apresentation');
    const htmlElements = document.createElement('h1');
    htmlElements.innerHTML = text;
    apresentation.appendChild(htmlElements);*/

    return (
        <div  className='hud-apresentation'>
                <h1>Olá, me chamo <span className='nome'>Celso Junio</span> !</h1>
            <div className='apresentation'>
                {text.split('').map((letter, index) => (
                    //<span key={index} className='letter'>{letter}</span>
                    <span key={index} className='letter'>
                        {letter === ' ' ? '\u00A0' : letter}
                    </span>
                ))}
            </div>
            <div className='ball'>

            </div>
        </div>
    )
}

export default Apresentacao;