import React from 'react';
import './Contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_020trlj', 'template_kjlb70k', form.current, 'TIfY-ZVp76-keMns8')

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Hashassi.wael@gmail.com</h5>
            <a href='mailto:Hashassi.wael@gmail.com' target='_blank'><button className='btn_contact'>Send a message</button></a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Ouael Hashassi</h5>
            <a href='https://m.me/Oua2eL' target='_blank'><button className='btn_contact'>Send a message</button> </a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <a href='https://api.whatsapp.com/send?phone=+21620701643' target='_blank'><button className='btn_contact'>Send a message</button></a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' row='7' placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
