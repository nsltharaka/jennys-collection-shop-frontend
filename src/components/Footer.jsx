import { ImPhone } from "react-icons/im"
import { HiMail } from "react-icons/hi"
import { RiWhatsappFill } from "react-icons/ri"
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai"
import { FaAddressBook } from "react-icons/fa"
import { Link } from "react-router-dom"


export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div id="contact" className="column contact-us-form">
                    <form>
                        <h3>Contact Us</h3>
                        <p>send us a message</p>
                        <input id="name" type="text" placeholder="your name" name="name" />
                        <input id="email" type="email" name="email" placeholder="your email" />
                        <textarea id="message" name="message" cols="30" rows="10" placeholder="your message"></textarea>
                        <button className="form-submit-button" onClick={e => e.preventDefault()}>Submit</button>
                    </form>
                </div>
                <div className=" column links-wrapper">
                    <div className="quick-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/cart">Cart</Link></li>
                        </ul>
                    </div>
                    <div className="quick-links social-links">
                        <h3>Connect with us</h3>
                        <ul className="">
                            <li><AiFillFacebook /><a href="facebook.com">facebook</a></li>
                            <li><AiFillInstagram /><a href="instagram.com">instagram</a></li>
                            <li><RiWhatsappFill /><a href="wa.me">whatsapp</a></li>
                        </ul>
                    </div>
                </div>
                <div className="column other-links">
                    <div className="footer-logo">
                        <p className="footer-logo-main">Jenny's</p>
                        <p className="footer-logo-sub">collection</p>
                    </div>
                    <div className="contact-info">
                        <p><ImPhone className="icon" /> 031-2233667</p>
                        <p><HiMail className="icon" /> jennys-shop@gmail.com</p>
                        <p><FaAddressBook className="icon icon-address" /> NO. 07, Kimbulapitiya Road, <br /> Negombo.</p>
                        <ul className="contact-info--icons">
                            <li><AiFillFacebook /></li>
                            <li><AiFillInstagram /></li>
                            <li><RiWhatsappFill /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-info">
                <small> Copyright &copy; 2022 Jenny's Collection. All rights reserved.</small>
            </div>
        </footer>
    )
}