import { FaFileDownload } from "react-icons/fa"
import { FaFile } from "react-icons/fa";
import "./Habilidades.css"
const Habilidades = () => {
    return (
        <div className="container-habilidades">
            <section className="resumo">
                <h2>Resumo</h2>
                <span>Sobre mim</span>
                <div className="text">
                    <p className="gradient-text">
                        Em busca da minha transição de carreira para o mundo da programação, estou determinado a aplicar minhas habilidades que acredito serem valiosos para colaborar com os objetivos da empresa.
                    </p>
                    <div class="curriculo">
                        <span className="resume-span"> </span>
                    </div>
                </div>
            </section>
            <div className="conhecimento">
                        <h3>Conhecimento</h3>
                <div class="javascript">
                        <span className="Java">
                            <p>JavaScript</p>
                        </span>
                        <div className="progrecao"></div>
                        <span className="porcentagem">
                        </span>
                            <div className="curso curso1"><a href="https://cursos.alura.com.br/certificate/05c85457-d5bc-4741-b8df-94ec0769fb3b?lang=pt_BR" target="_blank">JavaScript com Node.js: criando sua primeira biblioteca </a><span className="curso1-span"></span></div>
                            <div className="curso curso2">
                                <span className="curso1-span"></span>
                                <a href="https://cursos.alura.com.br/certificate/bb5016c5-f752-4644-8bcd-0c0ff808714c?lang=pt_BR">Lógica de programação: com JavaScript</a>
                            </div>
                    </div>
                    <div class="javascript">
                        <span className="Java">
                            <p>JavaScript</p>
                        </span>
                        <div className="progrecao">
                        </div>
                        <span className="porcentagem">60%</span>
                    </div>
                    <div class="javascript">
                        <span className="Java">
                            <p>JavaScript</p>
                        </span>
                        <div className="progrecao">
                        </div>
                        <span className="porcentagem">60%</span>
                    </div>
                    <div class="javascript">
                        <span className="Java">
                            <p>JavaScript</p>
                        </span>
                        <div className="progrecao">
                        </div>
                        <span className="porcentagem">60%</span>
                    </div>
                    <div class="javascript">
                        <span className="Java">
                            <p>JavaScript</p>
                        </span>
                        <div className="progrecao">
                        </div>
                        <span className="porcentagem">60%</span>
                    </div>

            </div>
        </div>
    );
}

export default Habilidades;