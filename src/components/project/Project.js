import React from 'react';
import './Project.css';
import IMG1 from '../../assets/Esportspic.png';
import IMG2 from '../../assets/ecommerce.png';

const Project = () => {
  return (
    <section id='project'>
      <h5>My Recent Work</h5>
      <h2>Esports Team Website</h2>

      <div className='project__container'>
        <div className='project__item'>
          <div className='project__item-cover'>
            <img className='project__img' src={IMG1} alt="cover" />
          </div>
          <h3>Esports Team Project</h3>
          <a href='https://github.com/Oua2eL/Esports_App' className='btn' target='_blank'>Github</a>
          <a href='https://github.com/Oua2eL/Esports_App' className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        <div className='project__item'>
          <div className='project__item-cover'>
            <img className='project__img2'src={IMG2} alt="cover" />
          </div>
          <h3>E-commerce Project</h3>
          <h2>Not Ready Yet !</h2>
        </div>
      </div>
    </section>
  )
}

export default Project
