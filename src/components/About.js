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
          <p>A wonderful serenity has taken possession of my entire soul, like</p>
          <p>these sweet mornings of spring which I enjoy with my whole heart.</p>
          <p>I am alone, and feel the charm of existence in this spot, which was</p>
          <p>created for the bliss of souls like mine. I am so happy, my dear </p>
          <p>friend, so absorbed in the exquisite sense of mere tranquil existence,</p>
          <p>that I neglect my talents. I should be incapable of drawing a single stroke</p>
          <p>at the present moment; and yet I feel that I never was a greater.</p>
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