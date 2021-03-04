import React from 'react'
import Experience from './Experience'
import profile from '../images/profile.jpg'
// ! UPDATE ABOUT WITH REDONE BRAND STATEMENT

const About = () => {
  return <>



    <section id="about">
      <h2>About Me</h2>
      <div className="aboutMain">
        <div className="aboutWord">
          <p>I am a junior software engineer with a focus on full stack development, looking to develop and nurture my experience and knowledge within an ethical and forward-thinking company.</p>
          <p>I was approached by General Assembly at the end of my Software Engineering Immersive Course and am currently a Teaching Assistant for the new cohort of students. </p>
          <p>Having worked in property and teaching previously, I have strong interpersonal, negotiation and sales skills that would blend well into any team. </p>
          {/* <p>I am able to offer full stack experience and am excited to share my passion for coding and learning.  </p> */}
        </div>
        <div className="profilePhoto">
          <img src={profile} />
        </div>
      </div>
      <Experience />
    </section>


  </>
}

export default About 