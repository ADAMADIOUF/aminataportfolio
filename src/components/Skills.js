
import React from 'react'
import { skillsData } from '../data'
const Skills = () => {
  return (
    <section className='skills' id='skills'>
      <div className='title section-center'>
        <h3>Strengths and Expertise</h3>
        <hr/>
      </div>
      <ul className='skills-container section-center'>
        {skillsData.map((link) => {
          const { id, title, text, icon } = link
          return (
            <li key={id} className='skill-item'>
              <span className='skills-icon'>{icon}</span>
              <h3 className='skills-title'>{title}</h3>
              <p className='skills-description'>{text}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Skills