import React from 'react';
import './Footer.css';
import {GrFacebookOption} from 'react-icons/gr';
import {FaInstagram} from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Portfolio</a>
      <ul className='permalinks'>
        <li><a href ="#">Home</a></li>
        <li><a href ="#skills">Skills</a></li>
        <li><a href ="#project">Project</a></li>
        <li><a href ="#contact">Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://www.facebook.com/Oua2eL'  target='_blank'><GrFacebookOption/></a>
        <a href='https://www.instagram.com/oua2el'  target='_blank'><FaInstagram/></a>
        <a href='https://twitter.com/oua2eel'  target='_blank'><FiTwitter/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Wael Portfolio. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
