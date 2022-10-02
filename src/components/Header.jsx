import { BsSuitHeart, BsCart3 } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import logo_image from '../images/logo.png'
import useAppContext from '../useAppContext'
import { Link } from 'react-router-dom'

export default function Header() {

    const { mobileNavOpen, setMobileNavOpen } = useAppContext()

    const toggle = () => {
        setMobileNavOpen(prev => !prev)
    }

    const closeNav = () => {
        setMobileNavOpen(false)
    }

    return (
        <header>
            <img className='logo-image' src={logo_image} alt="jenny's collection" />
            <nav className="navBar-container">
                <ul className={`navBar ${mobileNavOpen && 'open'}`}>
                    <li className="navBar-item active" onClick={closeNav}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navBar-item" onClick={closeNav}>
                        <Link to="/about" >About Us</Link>
                    </li>
                    <li className="navBar-item" onClick={closeNav}>
                        <Link to="/products" >Products</Link>
                    </li>
                </ul>
            </nav>
            <div className="shortcuts">
                <button className="shortcut-button">
                    <BsSuitHeart />
                </button>
                <button className="shortcut-button">
                    <BsCart3 />
                </button>
                {
                    mobileNavOpen ? <AiOutlineClose className='mobileNav-toggle fixed' onClick={toggle} />
                        : <GiHamburgerMenu className='mobileNav-toggle' onClick={toggle} />
                }
            </div>
        </header>
    )

}