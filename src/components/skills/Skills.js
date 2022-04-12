import React from 'react';
import './Skills.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const Skills = () => {
  return (
    <section id='skills'>
      <h2>What Skills I Have</h2>
      <div className='container skill__container'>
        <div className='skill__frontend'>
          <h3>Frontend Development</h3>
          <div className='skill__content'>
            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon' />
              <h4>HTML</h4>
            </article>
            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon'/>
              <h4>CSS</h4>
            </article>
            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon'/>
              <h4>Javascript</h4>
            </article>
            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon'/>
              <h4>Bootstrap</h4>
            </article>
            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon'/>
              <h4>React</h4>
            </article>
          </div>
        </div>



        <div className='skill__backend'>
        <h3>Backend Development</h3>
          <div className='skill__content'>
            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon'/>
              <h4>Node JS</h4>
            </article>
            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon'/>
              <h4>MongoDB</h4>
            </article>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
