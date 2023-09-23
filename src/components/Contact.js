import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect, useState } from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'
import { BsBookHalf } from 'react-icons/bs'
import contact from "../assets/contact.png"
import emailjs from 'emailjs-com'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .send(
        'service_7uk1sug',
        'template_5mj4qui',
        { name, email, message },
        'Gc1Gl0HLvCtGvFHPg'
      )
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text)
        setShowSuccess(true)
        setTimeout(() => {
          setShowSuccess(false)
        }, 10000)
      })

      // You can display a success message or perform any other actions here

      .catch((error) => {
        console.error('Email error:', error)
        // You can handle the error here, such as displaying an error message to the user
      })

    setName('')
    setEmail('')
    setMessage('')
  }
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      delay: 50,
      easing: 'ease-in-out',
    })
  }, [])
  return (
    <div className='contact' id='contact'>
      <div className='contact-section section-center'>
        <div className='title'>
          <h3>Reach for Collaboration</h3>
        </div>
        <div className='contact-f-container'>
          <article>
            <p>
              "I'm interested in freelance opportunities, especially ambitious
              or large projects. However, if you have any other requests or
              questions, please don't hesitate to contact me. 😍"
            </p>
          </article>
          <article>
            <img src={contact} alt='' />
          </article>
        </div>
        <form onSubmit={handleSubmit} className='form section-center'>
          <div className='form-group'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message:</label>
            <textarea
              id='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type='submit'>Send</button>
        </form>

        {showSuccess && (
          <div
            className='success-message'
            style={{
              backgroundColor: '#d4edda',
              color: '#155724',
              padding: '5px',
              margin: '5px 0',
              borderRadius: '5px',
            }}
          >
            <p>Your message has been sent successfully!</p>
          </div>
        )}

        <div className='contact-lins'>
          <div>
            <a
              href='https://github.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>
                <AiFillGithub />
              </span>
            </a>
          </div>
          <div>
            <a
              href='https://www.linkedin.com/feed/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>
                <AiFillLinkedin />
              </span>
            </a>
          </div>
          <div>
            <a
              href='https://dev.to/adamadiouf'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>
                <BsBookHalf />
              </span>
            </a>
          </div>
          <div>
            <a
              href='https://www.facebook.com/home.php'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>
                <AiFillFacebook />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
