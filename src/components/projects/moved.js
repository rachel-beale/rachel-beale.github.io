import React from 'react'
// import logo from '../../images'
import { BsLink45Deg } from 'react-icons/bs'
const Moved = () => {
  return <>
    <section id="projectMain">
      <div className="row">
        <div className="left">
          <div className="leftTop"></div>
          <div className="leftBottom"></div>
        </div>
        <div className="middle">
          <div className="middleTop">
            <h3>MOVED</h3>
            <p>2 days | paired project</p>
            <i className="devicon-react-plain"></i>
            <i className="devicon-python-plain"></i>
            <i className="devicon-postgresql-plain"></i>
            <i className="devicon-flask-original colored"></i>


            <p>A full-stack Dating App using Python, Flask, PostgreSQL and React.
            Users can swipe for left or right  and once matched
            can communicate through real-time messaging.
            </p>
            <p>Take a look: </p>
            <a className="singleIcon" href="https://github.com/rachel-beale/project-2" target="_blank">
              <i className="devicon-github-original"></i>
            </a>

            <a className="singleIcon" href="https://rachel-beale.github.io/project-2/" target="_blank">
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

export default Moved