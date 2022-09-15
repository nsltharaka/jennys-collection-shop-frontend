import { BsSuitHeart, BsCart3 } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import logo_image from '../images/logo.png'
import useAppContext from '../useAppContext'

export default function Header() {

    const { mobileNavOpen, setMobileNavOpen } = useAppContext()

    const toggle = () => {
        setMobileNavOpen(prev => !prev)
    }

    return (
        <header>
            <img className='logo-image' src={logo_image} alt="jenny's collection" />
            <nav className="navBar-container">
                <ul className={`navBar ${mobileNavOpen && 'open'}`}>
                    <li className="navBar-item active">Home</li>
                    <li className="navBar-item">About Us</li>
                    <li className="navBar-item">Products</li>
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