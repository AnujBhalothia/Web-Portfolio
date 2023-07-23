import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {RiGithubLine} from 'react-icons/ri'
import {FaHackerrank} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="__blank"><FiLinkedin/></a>
        <a href="https://github.com" target="__blank"><RiGithubLine/></a>
        <a href="https://hackerrank.com" target="__blank"><FaHackerrank/></a>
    </div>
  )
}

export default HeaderSocials