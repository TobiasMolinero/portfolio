import '../css/Header.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
        <div className="logo">
            <img src={logo} alt="logo"/>
        </div>
        <Link className='link' to='https://forms.gle/vdfVD7PsKpZyVpPcA' target='_blank'><button>Contactame</button></Link>
    </header>
  )
}

export default Header
