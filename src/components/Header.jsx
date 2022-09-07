import { BsSuitHeart, BsCart3 } from 'react-icons/bs'
import logo from '../images/logo.png'

export default function Header() {

    return (
        <header>
            <img className='logo-image' src={logo} alt="" />
            {/* <h1 className="logo-main-text">Jenny's</h1>
                <p className="logo-sub-text">collection</p> */}
            <nav className="navBar-container">
                <ul className="navBar">
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
            </div>
        </header>
    )

}