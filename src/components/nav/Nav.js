import React from 'react';
import './Nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineFileDone} from 'react-icons/ai';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {IoIosGitBranch} from 'react-icons/io';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState ('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav ('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#skills' onClick={() => setActiveNav ('#skills')} className={activeNav === '#skills' ? 'active' : ''}><IoIosGitBranch/></a>
      <a href='#project' onClick={() => setActiveNav ('#project')} className={activeNav === '#project' ? 'active' : ''}><AiOutlineFileDone/></a>
      <a href='#contact' onClick={() => setActiveNav ('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav
