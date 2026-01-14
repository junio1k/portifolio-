import './html.css'

const Hipertext = () => {
    return (
        <div className='container'>
            <span className="Java">
                <p>HTML</p>
            </span>
            <div className="progrecao">
            </div>
            <span className="porcentagem-html"></span>
            <div className="curso curso1-html">
                <a href="https://cursos.alura.com.br/certificate/b0c69b5a-84d2-42d4-a325-9846ab5a3bbe?lang=pt_BR">
                HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags
                </a>
                <span className="curso1-span"></span>
            </div>
            <div className="curso curso2-html">
                <span className="curso2-span"></span>
                <a href="https://cursos.alura.com.br/certificate/b0e07560-e8f3-44b0-88b9-a760a0169863?lang=pt_BR">
                <p>HTML e CSS: Classes, posicionamento e Flexbox</p>
                </a>
            </div>
        </div>
    )
}

export default Hipertext;