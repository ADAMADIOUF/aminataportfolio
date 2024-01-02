import React from 'react'
import about from "../assets/about.png"
const About = () => {
  return (
    <section className='about section-center' id='about'>
      <div className='title'>
        <h3>Building the Web of Tomorrow</h3>
        <hr />
      </div>
      <div className='about-container'>
        <article className='about-img'>
          <img src={about} alt='' />
        </article>
        <article className='about-me-content'>
          <h3>Develop, Implement, Reliable & Innovate.</h3>
          <p>
            I'm Adama Diouf, a dedicated front-end developer with 3 years of
            experience, specializing in crafting responsive and user-friendly
            web applications. My journey into development began with a passion
            for creating visually appealing websites, leading me to constantly
            refine my skills and stay updated on industry trends. Proficient in
            HTML, CSS, JavaScript, and frameworks like React, I take pleasure in
            turning concepts into reality with clean and efficient code.
          </p>
          <p>
            Having played a pivotal role in successful project deliveries
            through collaboration with cross-functional teams, I thrive on
            creating exceptional user experiences. Commencing my engineering
            studies in March 2020, I pursue continuous learning to enhance my
            abilities. Embracing the philosophy of learning by doing, I
            consistently work hard to exceed expectations. 😎 As a creative
            developer passionate about engineering.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About