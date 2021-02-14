import React, { useState } from 'react'

// import GALogo from './logos/GALogo'
import GALogo from '../images/galogo.png'

const info = {
  gata: {
    company: 'General Assembly',
    dates: 'December 2020 - Present',
    title: 'Teaching Assistant',
    location: 'London, Remote'
  },
  ga: {
    company: 'General Assembly',
    dates: 'September - December 2020',
    title: 'Software Engineering Immersive, 12 week bootcamp',
    location: 'London, Remote'
  }
  // tefl: {
  //   company: 'TEFL',
  //   dates: 
  //   title:
  //   location:
  // },
  // beihai: {
  //   company:
  //   dates:
  //   title:
  //   location:
  // }
}


const Experience = () => {
  const [selected, setSelected] = useState(false)
  // const [hover, setHover] = useState('gata')

  // function handleHover(e) {
  //   if (hover !== e.target.dataset.id) {
  //     setHover(e.target.dataset.id)
  //   }
  // }

  return (<>
    <div>
      <p>My experience:</p>
    </div>
    <div className="experience">
      <img className="experienceImage" src={GALogo} onClick={() => {
        setSelected(!selected)
      }} ></img>
      <img className="experienceImage" src={GALogo}></img>
      {/* <GALogo size={50} id="ga" handleHover={handleHover} hover={hover} />
      <GALogo size={50} id="ga" handleHover={handleHover} hover={hover} /> */}
    </div>
    {/* 
    {selected ?
      <div>
        {info[hover].dates}
      </div>

      :
      <div className="closed"></div>
    } */}
    {/* {hover && <div className="infos">
      <div className="dates is-size-7">
        {info[hover].dates}
        <span className="backslash"> Other </span>
        {info[hover].location}
      </div>
      <div className="company is-size-5">
        <a href={info[hover].link} target="_blank" rel="noopener noreferrer">{info[hover].company}</a>
      </div>


      {info[hover].title.map((title, i) => {
        return <div key={i} className="jobtitles is-size-6 has-text-weight-bold">
          {title.position} <span className="has-text-weight-light is-size-7">{title.details}</span>
        </div>
      })}
    </div>} */}
  </>)
}

export default Experience