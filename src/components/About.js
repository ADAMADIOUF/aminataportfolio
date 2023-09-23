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
        <article className='about-img' data-aos='fade-up'>
          <img src={about} alt='' />
          <div className='about-creative'>
            <h6>hard-working</h6>
            <h6>creative</h6>
            <h6>Passionate</h6>
            <h6>Motivated</h6>
            <h6>Reliable</h6>
            <h6>Productive</h6>
          </div>
          <p data-aos='fade-right'>
            I started studying engineering in March 2020. Since then, I have
            been learning a lot of things every day to further my skills. I like
            to learn and try new things. I am a big fan of learning to program
            while making productions. Furthermore, I am proud to say that I
            always work hard and do my best to live up to the expectations
            people have for me.😎
          </p>
          <hr />
          <p data-aos='fade-up'>
            I am a <span> creative developer </span>
            who has a great passion for learning engineering.😎 currently, I'm a
            freelancer.
          </p>
        </article>
        <article className='about-me-content'>
          <p data-aos='fade-right'>
            Hi, I'm <span className='highlight'>Adama Diouf</span>, a passionate
            front-end developer with <span className='highlight'>2</span> years
            of experience. I specialize in building user-friendly and responsive
            web applications using modern web technologies.
          </p>
          <hr />
          <p data-aos='fade-up'>
            My journey as a developer began when I discovered my fascination for
            crafting interactive and visually appealing websites. Since then, I
            have been dedicated to honing my skills and staying up to date with
            the latest industry trends and best practices.
          </p>
          <hr />
          <p data-aos='fade-right'>
            As a front-end developer, I enjoy transforming ideas into reality
            through clean and efficient code. I have hands-on experience with
            HTML, CSS, JavaScript, and frameworks like React. I'm also
            proficient in utilizing libraries, version control systems, and task
            runners to streamline the development process.
          </p>
          <hr />
          <p data-aos='fade-up'>
            Collaborating with cross-functional teams, I have effectively
            contributed to the successful delivery of numerous projects. I am
            constantly seeking new challenges that allow me to expand my skills
            and create exceptional user experiences.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About