import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import emailjs from 'emailjs-com';

const Contact = () => {

  const [emailOpen, setEmailOpen] = useState(false)
  const [formValue, setFormValue] = useState({
    email: 'Email',
    name: 'Name',
    message: 'I would love to speak to you about...'
  })

  function sendEmail(e) {
    e.preventDefault()
    emailjs.sendForm('service_b3h8chy', 'template_7ohzpl8', e.target, 'user_3U2GiRgLRTvPxlpsk0Lt9')
      .then((result) => {
        location.reload()
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      });
  }

  return <>
    <section id="contact" className="skills">
      <h2>Contact</h2>
      <div className="devicon">
        {/* Email */}
        <div className="singleIcon" onClick={() => {
          setEmailOpen(!emailOpen)
        }}>
          <AiOutlineMail className="other" />
          <div className="label">Email</div>
        </div>
        {/* Linkedin */}

        <a className="singleIcon" href="https://www.linkedin.com/in/rachel-beale" target="_blank">
          <i className="devicon-linkedin-plain"></i>
          <div className="label">LinkedIn</div>
        </a>
        {/* Github */}
        <a className="singleIcon" href="https://www.github.com/rachel-beale" target="_blank">
          <i className="devicon-github-original"></i>
          <div className="label">GitHub</div>
        </a>
      </div>



      <div className={emailOpen ? 'contactForm' : 'closed'}>
        <form className="contact-form" onSubmit={sendEmail}>
          <input className="input" type="text" name="from_name" placeholder={formValue.name} />
          <input className="input" type="email" name="from_email" placeholder={formValue.email} />
          <textarea className="input" name="message" placeholder={formValue.message} />
          <input className="button" type="submit" value="Send" />
        </form>

      </div>

    </section>
  </>
}








export default Contact 