import "./footer.css"
import { FaSquareInstagram } from "react-icons/fa6"

const Footer = ()=> {
    const linkMensagem = "https://wa.link/0qs8ci"
    return (
            <footer className="footer-container">
                <div className='footer-content'>
                    <div className="footer-social_media">
                        <h3>Media social</h3>
                        <ul className="ul-social">
                            <li><a href="">Instagram</a></li>
                            <li><a href="">LinkedIn</a></li>
                            <li><a href="">Github</a></li>
                        </ul>
                    </div>
                <p>© 2026 Celso Junio, Inc. All rights reserved.</p>
                    <div className="footer-onde_encontrar">
                        <h3> Entre em contato se você gostou.</h3>
                        <a href="">Email</a>
                        <a href={linkMensagem} target="_blank">Whathsapp</a>
                    </div>
                </div>
            </footer>
    )
}

export default Footer;