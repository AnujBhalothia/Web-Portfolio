import React from 'react'
import Resume from '../../assets/Resume.pdf'

const Buttons = () => {
  return (
    <div className='button'>
        <a className='btn' href={Resume} download>Download CV</a>
        <a className='btn btn-primary' href="#contact">Contact Me</a>
    </div>
  )
}

export default Buttons