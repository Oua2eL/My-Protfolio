import React from 'react';
import './Header.css';
import CTA from '../CTA';
import ME from '../../assets/My-Pic.jpg';
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <div>
      <header>
          <div className="container header__container">
              <h5>Hello I'm</h5>
              <h1>Wael Hashassi</h1>
              <h5 className='text-light'>Fullstack Developer</h5>
              <CTA />
              <HeaderSocial />

              <div className="me">
                  <img src={ME} alt='Photo' />
              </div>
              <a href='#contact' className='scroll__down'>Scroll Down</a>
          </div>
      </header>
    </div>
  )
}

export default Header