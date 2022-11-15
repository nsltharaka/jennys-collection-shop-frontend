import { BsSuitHeart, BsCart3 } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import logo_image from '../images/logo.png'
import useAppContext from '../useAppContext'
import { Link, NavLink } from 'react-router-dom'

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
            <Link to="/">
                <img className='logo-image' src={logo_image} alt="jenny's collection" />
            </Link>
            <nav className="navBar-container">
                <ul className={`navBar ${mobileNavOpen && 'open'}`}>
                    <li className="navBar-item" onClick={closeNav}>
                        <NavLink to="/" end>Home</NavLink>
                    </li>
                    <li className="navBar-item" onClick={closeNav}>
                        <NavLink to="/about" >About Us</NavLink>
                    </li>
                    <li className="navBar-item" onClick={closeNav}>
                        <NavLink to="/products" >Products</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="shortcuts">
                <a href="https://www.instagram.com/_the_hanger__lk" target="_blank" rel="noreferrer">
                    <button className="shortcut-button">
                        <BsSuitHeart />
                    </button>
                </a>
                <Link to="/cart">
                    <button className="shortcut-button">
                        <BsCart3 />
                    </button>
                </Link>
                {
                    mobileNavOpen ? <AiOutlineClose className='mobileNav-toggle fixed' onClick={toggle} />
                        : <GiHamburgerMenu className='mobileNav-toggle' onClick={toggle} />
                }
            </div>
        </header>
    )

}