import React, { useRef } from 'react';
import './contact.css'
import { TfiEmail } from 'react-icons/tfi'
import { TfiLinkedin } from 'react-icons/tfi'
import { SiWhatsapp } from 'react-icons/si'
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4r51ejc', 'template_aeib9ye', form.current, 'luhinNTYvtBZOtJHS')
      e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <TfiEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>anujbhalothia6375@gmail.com</h5>
            <a href="mailto:anujbhalothia6375@gmail.com" target="_blank">Send a mail</a>
          </article>
          <article className="contact__option">
            <TfiLinkedin className='contact__option-icon' />
            <h4>Linkdin</h4>
            <h5>Anuj Bhalothia</h5>
            <a href="https://linkedin.com" target="_blank">Connect with me</a>
          </article>
          <article className="contact__option">
            <SiWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91 8005612604</h5>
            <a href="https://api.whatsapp.com/send?phone=918005612604" target="_blank">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <div className="mybutton">
          <button type='submit' className='btn btn-primary mybutton'>Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact