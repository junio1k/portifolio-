
import { FaFileDownload } from "react-icons/fa"
import { FaFile } from "react-icons/fa";
import "./Habilidades.css"
import Hipertext from "../hipertext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect, useRef } from "react";


const Habilidades = () => {

    const el = useRef();
    const tl = useRef();

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            tl.current = gsap.timeline({
                scrollTrigger: {
                    trigger:".curso",
                    scrub:true,
                    //markers:true,
                    start:'top 600px',
                    end: 'bottom 250px',
                }
            }).fromTo('.conhecimento',{
                opacity:0,
                x:260,
            },{
                opacity:1,
                x:0,
            })
            .fromTo('.curso1', {
                opacity:0,
                x: -260,
            }, {
                opacity:1,
                x:0,
            })
            .fromTo('.curso2', {
                opacity:0,
                x: 260,
            }, {
                opacity:1,
                x:0,
            })
            .fromTo('.curso3', {
                opacity:0,
                x: -260,
            }, {
                opacity:1,
                x:0,
            })
            .fromTo('.curso4', {
                opacity:0,
                x: 260,
            }, {
                opacity:1,
                x:0,
            })
            .fromTo('.curso5', {
                opacity:0,
                x: -260,
            }, {
                opacity:1,
                x:0,
            })
        }, el)

        return () => {
            gsap.killTweensOf(".conhecimento")
        }
    }, [])

    useLayoutEffect(() => {
        gsap.to('.html', {
            
        })
        return () => {
            gsap.killTweensOf('.html');
        }
    })
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
                <div class="cursos javascript" ref={el}>
                        <span className="Java">
                            <p>JavaScript</p>
                        </span>
                        <div className="progrecao"></div>
                        <span className="porcentagem">
                        </span>
                            <div className="curso curso1 ">
                                <a href="https://cursos.alura.com.br/certificate/05c85457-d5bc-4741-b8df-94ec0769fb3b?lang=pt_BR" target="_blank">JavaScript com Node.js: criando sua primeira biblioteca </a>
                            <span className="curso1-span"></span>
                            </div>
                            <div className="curso curso2">
                                <span className="curso2-span"></span>
                                <a href="https://cursos.alura.com.br/certificate/bb5016c5-f752-4644-8bcd-0c0ff808714c?lang=pt_BR">Lógica de programação: com JavaScript</a>
                            </div>
                            <div className="curso curso3">
                                <span className="curso3-span"></span>
                                <a href="https://cursos.alura.com.br/certificate/c4241f5c-ad36-425f-9ea6-fa236db72c83?lang=pt_BR">JavaScript: manipulando elementos no DOM</a>
                            </div>
                            <div className="curso curso4">
                                <span className="curso2-span"></span>
                                <a href="https://cursos.alura.com.br/certificate/06f301b5-55a0-4ed0-baa3-2315afa31859?lang=pt_BR">JavaScript para Web: Crie páginas dinâmicas</a>
                            </div>
                            <div className="curso curso5">
                                <a href="https://cursos.alura.com.br/certificate/1ba3590c-8a06-4af5-b460-2702da2c196e?lang=pt_BR">JavaScript: explorando a linguagem</a>
                                <span className="curso2-span"></span>
                            </div>
                    </div>
                    <div class="cursos html">
                        <Hipertext 
                        />
                    </div>
            </div>
        </div>
    );
}

export default Habilidades;