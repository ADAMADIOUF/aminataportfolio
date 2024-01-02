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
      <div className=' section-center'>
        <div className='title'>
          <h3>Reach for Collaboration</h3>
        </div>
        <div className='contact-container'>
          <article className='form-content'>
            <form onSubmit={handleSubmit} className='form'>
              <div className='form-group'>
                <input
                  placeholder='Full Name...'
                  type='text'
                  id='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  placeholder='Email Address...'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className='form-group'>
                <textarea
                  id='message'
                  placeholder='What assistance can I provide you with?
'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type='submit' className='btn btn-contact'>Send</button>
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
          </article>
          <article className='form-details'>
            <h3>Let's brainstorm and create something extraordinary</h3>
            <p>
              If you're keen on partnering up, don't hesitate to reach out to me
              at adamadiof@gmail.com. I'm enthusiastic about hearing your
              thoughts and beginning our collaboration!
            </p>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Contact
