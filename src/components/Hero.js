import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import hero from "../assets/hero-img.png"
const Hero = () => {
  return (
    <div className='hero' id='home'>
      <div className='hero-container nav-center'>
        <article className='hero-details'>
          <h1 className='hero-name'>I'm Adama Diouf</h1>
          <p className='hero-title'>Front-End Developer</p>
          <div className='home-content'>
            <h3 data-aos='fade-up'>
              I keep <span className='home-animate'> on growing.</span>
            </h3>
          </div>

          <p className='hero-description'>
            Hello, I'm Adama Diouf , a skilled front-end developer with a
            passion for crafting exceptional digital experiences. With a strong
            commitment to creating innovative and user-friendly web
            applications, I bring a unique blend of creativity and technical
            expertise to every project I undertake. Welcome to my digital
            portfolio, where I showcase my work and journey as a developer.
          </p>
          <div className='hero-links-icons'>
            <a
              href='https://github.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithubSquare className='hero-icon' />
            </a>
            <a
              href='https://www.linkedin.com/feed/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin className='hero-icon' />
            </a>
            <a
              href='https://twitter.com/home?lang=en'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitterSquare className='hero-icon' />
            </a>
          </div>
        </article>
        <article className='hero-img-container'>
          <img src={hero} className='hero-img' alt='hero-img' />
        </article>
      </div>
    </div>
  )
}
export default Hero
