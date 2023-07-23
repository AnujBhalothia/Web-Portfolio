import React from 'react'
import './header.css'
import Buttons from './Buttons'
import MY_IMAGE from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Anuj Bhalothia</h1>
        <h5 className="text-light">Software Developer</h5>
        
        <Buttons/>
        <HeaderSocials/>
        
        <div className="me">
          <img src={MY_IMAGE} alt="me" />
        </div>
        
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header