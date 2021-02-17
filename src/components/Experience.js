import React, { useState } from 'react'

import cv from '../images/cv.png'
import logo from '../images/logo.png'

// ! TO UPLOAD FINISHED CV AS PDF!
const info = {
  'gata': {
    company: 'General Assembly',
    dates: 'December 2020 - Present',
    title: 'Teaching Assistant',
    details: 'Approached by General Assembly to become a teaching assistant for the upcoming Software Engineering immersive course. Taught the fundamentals of range of languages and frameworks - including JavaScript, React, NodeJS, Express, MongoDB & Python. Supported students learning through office hours as well as routinely debugged and reviewing students code.',
    location: 'London, Remote | '
  },
  'ga': {
    company: 'General Assembly',
    dates: 'September 2020 - December 2020',
    title: 'Software Engineering Immersive, 12 week',
    details: 'A 12 week immersive Software Engineering Bootcamp. This course has provided in depth, working knowledge of the above technical skills and as well teaching best practice and clean coding. The course was structured with daily morning standups followed by a number of lectures and technical labs throughout the day. Git and GitHub were used intensively for classwork and homework.',
    location: 'London, Remote | '
  },
  'cv': {
    company: <a className="download" href="../images/cm-frontend-dev-test.pdf" download>Click <span className="underline">here</span> to download my CV</a>,
    dates: '',
    title: <a className="download" href="https://www.linkedin.com/in/rachel-beale" target="_blank">Or take a look at my <span className="underline">LinkedIn</span></a>,
    details: '',
    location: ''
  }
}





const Experience = () => {
  const [hover, setHover] = useState('gata')

  function handleHover(e) {
    if (hover !== e.target.dataset.id) {
      setHover(e.target.id)
    }
  }

  return (<>
    <div className="experienceContainer">
      <h3 className="h3">My Experience:</h3>
      <div className="experienceLogos"
      // className={'experienceImage' + `${hover === 'gata' ? 'experienceClicked' : ''}`}
      >
        <div className="experienceIcon">
          <img className="experienceImage" src={logo} onClick={handleHover} id='gata' ></img>
          < div className={`${hover === 'gata' ? 'clickedArrow' : ''}`}></div>
        </div>

        <div className="experienceIcon">
          <img className="experienceImage" src={logo} onClick={handleHover} id='ga' ></img>
          < div className={`${hover === 'ga' ? 'clickedArrow' : ''}`}></div>
        </div>

        <div className="experienceIcon">
          <img className="experienceImage" src={cv} onClick={handleHover} id='cv' ></img>
          < div className={`${hover === 'cv' ? 'clickedArrow' : ''}`}></div>
        </div>
      </div>

      <div className="info">
        <p>{info[hover].location} {info[hover].dates}</p>
        <h3>{info[hover].company}</h3>
        <h4>{info[hover].title}</h4>
        <p className="infoDetails">{info[hover].details}</p>
        {/* <p>{info[hover].detailsSecond}</p>
        <p>{info[hover].detailsThird}</p> */}
      </div>
      {/* <a href="../images/cm-frontend-dev-test.pdf" download>HERE</a>        </div> */}
    </div>




  </>)
}

export default Experience