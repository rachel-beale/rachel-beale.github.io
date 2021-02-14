import React from 'react'
import { BsLink45Deg } from 'react-icons/bs'

const Seeded = () => {
  return <>
    <section id="projectMain">
      <div className="row">
        <div className="left">
          <div className="leftTop"></div>
          <div className="leftBottom"></div>
        </div>
        <div className="middle">
          <div className="middleTop">
            <h3>SEEDED</h3>
            <p>one week | group project</p>
            <i className="devicon-react-plain"></i>
            <i className="devicon-nodejs-plain"></i>
            <i className="devicon-express-original"></i>
            <i className="devicon-mongodb-plain"></i>
            <p>Seeded, a MERN plant sitting app
            This feature rich app helped people find plant sitters,
            and has features including message boards, photo based social
            media and integrated map
            </p>

            <p>Take a look: </p>
            <a className="singleIcon" href="https://github.com/rachel-beale/project-3" target="_blank">
              <i className="devicon-github-original"></i>
            </a>

            <a className="singleIcon" href="https://rachelbeale-seeded.herokuapp.com/" target="_blank">
              <BsLink45Deg />
            </a>
          </div>
          <div className="middleBottom"></div>
        </div>
        <div className="right"></div>

      </div>

    </section>
  </>
}

export default Seeded