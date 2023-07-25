import '../css/HeaderForm.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const HeaderForm = () => {
    return (
        <header className="header-form">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="button">
                <Link className='link' to={'/'}><button>Back to main</button></Link>
            </div>
        </header>
    )
}

export default HeaderForm