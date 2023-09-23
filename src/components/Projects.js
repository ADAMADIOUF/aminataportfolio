import React from 'react'
import { projects } from '../data'
import { FaGithubSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <div className='title section-center'>
        <h3>CodeConquer: Programming Challenges and Solutions"</h3>
        <hr />
      </div>
      <ul className='project-container section-center'>
        {projects.map((link) => {
          const { id, title, text, img, github, url } = link
          return (
            <li key={id} className='project-details'>
              <img src={img} alt='' className='project-img' />
              <div className='project-info'>
                <h3 className='projects-title'>{title}</h3>
                <p className='projects-description'>{text}</p>
                <div className='project-icon'>
                  <a href={url} target='_blank' rel='noopener noreferrer'>
                    <TbWorldWww className='projects-icon' />
                  </a>
                  <a href={github} target='_blank' rel='noopener noreferrer'>
                    <FaGithubSquare className='projects-icon' />
                  </a>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Projects
