import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscProject} from 'react-icons/vsc'
import {MdMilitaryTech} from 'react-icons/md'
import {MdContacts} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      {/* eslint-disable-next-line */}
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#'?'active':''}><FaHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}><FiUser/></a>
      <a href="#experience"onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'?'active':''}><VscProject/></a>
      <a href="#services"onClick={()=>setActiveNav('#services')} className={activeNav==='#services'?'active':''}><MdMilitaryTech/></a>
      <a href="#contact"onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}><MdContacts/></a>
    </nav>
  )
}

export default Nav