import { ImPhone } from "react-icons/im"
import { HiMail } from "react-icons/hi"
import { RiWhatsappFill } from "react-icons/ri"
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai"


export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="column contact-us-form">
                    <form>
                        <h3>Contact Us</h3>
                        <p>send us a message</p>
                        <input id="name" type="text" placeholder="your name" name="name" />
                        <input id="email" type="email" name="email" placeholder="your email" />
                        <textarea id="message" name="message" cols="30" rows="10" placeholder="your message"></textarea>
                        <button className="form-submit-button" onClick={e => e.preventDefault()}>Submit</button>
                    </form>
                </div>
                <div className="column quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>Products</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className="column social-links">
                    <div className="footer-logo">
                        <p className="footer-logo-main">Jenny's</p>
                        <p className="footer-logo-sub">collection</p>
                    </div>
                    <div className="contact-info">
                        <p><ImPhone className="icon" /> 031-2233667</p>
                        <p><HiMail className="icon" /> jennys-shop@gmail.com</p>
                        <ul>
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