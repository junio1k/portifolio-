import { useLayoutEffect} from 'react';
import { gsap } from 'gsap';

import './apresentacao.css';

const Apresentacao = () => {

    const text = "Estou começando minha carreira como desenvolvedor web e dar vida a projetos únicos. Fique avontade para e explorar meu portfólio!"

    /*const apresentation = document.querySelector('.apresentation');
    const htmlElements = document.createElement('h1');
    htmlElements.innerHTML = text;
    apresentation.appendChild(htmlElements);*/

    return (
        <div className='hud-apresentation'>
            <div className='apresentation'>
                <h1>Olá, me chamo <span className='nome'>Celso Junio</span> !</h1>
                {text.split('').map((letter, index)=>(
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