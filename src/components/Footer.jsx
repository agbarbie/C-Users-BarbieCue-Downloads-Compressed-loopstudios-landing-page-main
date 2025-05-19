import React from 'react'
import Logo from '../images/logo.svg'
import Facebook from "../images/icon-facebook.svg"
import Twitter from "../images/icon-twitter.svg"
import Pinterest from "../images/icon-pinterest.svg"
import Instagram from "../images/icon-instagram.svg"
import "./Footer.css"

export default function Footer() {
  return (
    <div>
        <footer>
          <div className="footer-left">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="footer-nav">
              <div>About</div>
              <div>Careers</div>
              <div>Events</div>
              <div>Products</div>
              <div>Support</div>
            </div>
          </div>
          
          <div className="footer-right">
            <div className="social-icons">
              <img src={Facebook} alt="Facebook" />
              <img src={Twitter} alt="Twitter" />
              <img src={Pinterest} alt="Pinterest" />
              <img src={Instagram} alt="Instagram" />
              
            </div>
            <div className="copyright">
              © 2021 Loopstudios. All rights reserved.
            </div>
          </div>
        </footer>
      
    </div>
  )
}
