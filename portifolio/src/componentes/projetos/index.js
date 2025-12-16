
import { Card } from '@heroui/card';
import { FaGithub } from 'react-icons/fa';
import './Projetos.css';
import Cards from '../cards';


const Projetos = (props) => {
    const names = {
        name1: "Lari Make Up",
        description1: "Um site voltado para agendamento e divulgação de serviços de maquiagem.",
        image1: "https://github.com/junio1k.png",
        name2: "Card Flix",
        description2: "Um lugar onde você pode salvar e criar cards dos seu filmes favoritos",
        image2: "https://github.com/junio1k.png"
    }
    return (
        <div className="container-projetos">
            <h1 className='h1-projetos'>Projetos</h1>
            <div class="cards-container">
                <Cards
                name={names.name1}
                description={names.description1}
                image={names.image1}
                gitIcons={<FaGithub />}
                />
                <Cards
                name={names.name2}
                description={names.description2}
                image={names.image2}
                gitIcons={<FaGithub />}
                />
            </div>
        </div>
    )
}

export default Projetos;