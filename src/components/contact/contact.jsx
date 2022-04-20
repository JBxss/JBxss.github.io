import React, { useRef } from 'react'
import { useTranslation } from "react-i18next";
import { MdOutlineEmail } from 'react-icons/md'
import { FaTelegramPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser';
import "./contact.css"


const Contact = () => {
  const { t } = useTranslation(["contact"]);

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
      <h5>{t("small")}</h5>
      <h2>{t("contact")}</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>juanseb100@gmail.com</h5>
            <a href="mailto:juanseb100@gmail.com" target='_blank' rel="noopener noreferrer">{t("send")}</a>
          </article>
          <article className="contact__option">
            <FaTelegramPlane className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>@JBxss</h5>
            <a href="https://t.me/JBxss" target='_blank' rel="noopener noreferrer">{t("send")}</a>
          </article>
        </div>
        {/* End of Contact Options */}
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder={t("input1")} required />
          <input type="email" name='email' placeholder={t("input2")} required />
          <textarea name="message" rows="7" placeholder={t("textArea")} required></textarea>
          <button type="submit" className='btn btn-primary'>{t("form")}</button>
        </form>
      </div>
    </section>
  )
}

export default Contact