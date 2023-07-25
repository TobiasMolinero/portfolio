/* eslint-disable react/no-unescaped-entities */
import '../css/Footer.css'
import react from '../assets/iconos/react.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div id="contact-me">
                <h2 className="text-center">Contact Me</h2>
                <p>Do you want your page to be more than an idea? I help you make it real.</p>
                <div className="d-flex align-items-start">
                    <Link className='link' to='https://forms.gle/vdfVD7PsKpZyVpPcA' target='_blank'><button>Let's do this!</button></Link>
                </div>
            </div>
            <div className="social-media">
                <div>
                    <ul>
                        <li><a href="https://www.instagram.com/tobiasmolinero98/?next=%2F" target="_blank" rel='noreferrer'><i className="bi bi-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/tobias-leandro-molinero-27a97a239/" target="_blank" rel='noreferrer'><i className="bi bi-linkedin"></i></a></li>
                        <li><a href="https://github.com/TobiasMolinero" target="_blank" rel='noreferrer'><i className="bi bi-github"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="derechos">
                <h3>Handcrafted by me &#169; 2023</h3>
                <h5>made with React<img src={react} alt='icon'/></h5>
            </div>
        </footer>
    )
}

export default Footer