import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/ouael-hashassi-1844b822b' target='_blank'><BsLinkedin/></a>
      <a href='https://github.com/Oua2eL' target='_blank'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocial
