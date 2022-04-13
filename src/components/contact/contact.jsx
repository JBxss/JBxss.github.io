import React, { useRef } from 'react'
import "./contact.css"
import { MdOutlineEmail } from 'react-icons/md'
import { FaTelegramPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0j3g6ne', 'template_yvn8ftj', form.current, '5D7Jo2e0sFKt0AQKN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>juanseb100@gmail.com</h5>
            <a href="mailto:juanseb100@gmail.com" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <FaTelegramPlane className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>@JBxss</h5>
            <a href="https://t.me/JBxss" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
        {/* End of Contact Options */}
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact