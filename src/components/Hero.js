import { useState } from 'react'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Hero = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const handleItemClick = () => {
    setMenuOpen(false)
  }

  const navbarHeight = 80 

  return (
    <div className='hero' id='home'>
      <div className='hero-container nav-center'>
        <article className='hero-details'>
          <h1 className='hero-name'>I'm Adama Diouf</h1>
          <p className='hero-title'>Front-End Developer</p>
          <div className='home-content'>
            <h3>
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
          <Link
            to='contact'
            spy={true}
            smooth={true}
            duration={500}
            offset={-navbarHeight}
            onClick={handleItemClick}
          >
            <button className='btn btn-hire'>Hire Me</button>
          </Link>
        </article>
        <article className='hero-links-icons'>
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
        </article>
      </div>
      <div className='services section-center'>
        <article>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='17'
              height='17'
              viewBox='0 0 17 17'
              fill='none'
            >
              <g clip-path='url(#clip0_895_2075)'>
                <path
                  d='M10.7471 12.0851L14.7564 8.07577L10.7471 4.06641'
                  stroke='white'
                  stroke-width='1.33645'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M5.40194 4.06641L1.39258 8.07577L5.40194 12.0851'
                  stroke='white'
                  stroke-width='1.33645'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </g>
              <defs>
                <clipPath id='clip0_895_2075'>
                  <rect
                    width='16.0375'
                    height='16.0375'
                    fill='white'
                    transform='translate(0.0566406 0.0566406)'
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <h3>front end development</h3>
          <p>
            Develop fully responsive and interactive websites that are tailored
            to the client's specific needs and preferences
          </p>
        </article>
        <article>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='17'
              height='17'
              viewBox='0 0 17 17'
              fill='none'
            >
              <g clip-path='url(#clip0_895_2086)'>
                <path
                  d='M14.9803 2.72852H10.3027'
                  stroke='white'
                  stroke-width='1.33645'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M7.62974 2.72852H2.95215'
                  stroke='white'
                  stroke-width='1.33645'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M14.9799 8.07617H8.96582'
                  stroke='white'
                  stroke-width='1.33645'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M6.29329 8.07617H2.95215'
                  stroke='white'
                  stroke-width='1.33645'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M14.9798 13.4219H11.6387'
                  stroke='white'
                  stroke-width='1.33645'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M8.9662 13.4219H2.95215'
                  stroke='white'
                  stroke-width='1.33645'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M10.3027 1.39258V4.06549'
                  stroke='white'
                  stroke-width='1.33645'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M6.29297 6.73828V9.41119'
                  stroke='white'
                  stroke-width='1.33645'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M11.6387 12.084V14.7569'
                  stroke='white'
                  stroke-width='1.33645'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </g>
              <defs>
                <clipPath id='clip0_895_2086'>
                  <rect
                    width='16.0375'
                    height='16.0375'
                    fill='white'
                    transform='translate(0.948242 0.0566406)'
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <h3>erformance Optimization</h3>
          <p>
            Provide website optimization services to clients looking to improve
            the speed and performance of their website.
          </p>
        </article>
        <article>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='17'
              height='17'
              viewBox='0 0 17 17'
              fill='none'
            >
              <g clip-path='url(#clip0_895_2104)'>
                <path
                  d='M10.8623 3.39648L13.5352 6.06939'
                  stroke='white'
                  stroke-width='1.33645'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M9.52648 4.73294L6.6531 1.85956C6.35131 1.55923 5.94288 1.39063 5.51712 1.39062C5.09135 1.39063 4.68292 1.55923 4.38113 1.85956L2.64374 3.59695C2.34341 3.89874 2.1748 4.30717 2.1748 4.73294C2.1748 5.1587 2.34341 5.56714 2.64374 5.86892L5.51712 8.7423'
                  stroke='white'
                  stroke-width='1.33645'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M6.18555 4.06302L7.522 2.72656'
                  stroke='white'
                  stroke-width='1.33645'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M2.17578 14.7561L5.85103 13.7537L14.9857 4.61907C15.3402 4.26462 15.5393 3.78388 15.5393 3.28261C15.5393 2.78134 15.3402 2.30061 14.9857 1.94616C14.6313 1.59171 14.1505 1.39258 13.6492 1.39258C13.148 1.39258 12.6672 1.59171 12.3128 1.94616L3.17812 11.0808L2.17578 14.7561Z'
                  stroke='white'
                  stroke-width='1.33645'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M12.8672 10.7466L14.2036 9.41016'
                  stroke='white'
                  stroke-width='1.33645'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M12.1988 7.4043L15.0722 10.2777C15.7003 10.9058 15.7003 11.9215 15.0722 12.5496L13.3348 14.287C12.7067 14.9152 11.691 14.9152 11.0628 14.287L8.18945 11.4137'
                  stroke='white'
                  stroke-width='1.33645'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </g>
              <defs>
                <clipPath id='clip0_895_2104'>
                  <rect
                    width='16.0375'
                    height='16.0375'
                    fill='white'
                    transform='translate(0.839844 0.0546875)'
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <h3>Frontend Mastery</h3>
          <p>
            As a frontend developer, I excel in leveraging Figma for UI/UX
            design, enhancing collaboration and streamlining effective design
            workflows.
          </p>
        </article>
      </div>
    </div>
  )
}
export default Hero
