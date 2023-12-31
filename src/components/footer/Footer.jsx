import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {ImTwitter} from 'react-icons/im'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Anuj Bhalothia</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookSquare/></a>
        <a href="https://twitter.com"><ImTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ANUJ BHALOTHIA CSE 36. All rights reserved.</small>
      </div>
    </footer>

  )
}

export default Footer