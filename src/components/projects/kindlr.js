import React from 'react'
import { BsLink45Deg } from 'react-icons/bs'
import logo from '../../images/kindlr/logo.png'
import main from '../../images/kindlr/main.png'
import match from '../../images/kindlr/match.png'
import daisy from '../../images/kindlr/daisy.png'
const Kindlr = () => {
  return <>
    <section id="projectMain">
      <div className="row">
        <div className="left">
          <div className="leftTop">
            <img src={logo} />
          </div>
          <div className="leftBottom">
            <img src={main} />
          </div>
        </div>
        <div className="middle">
          <div className="middleTop">
            <h3>KINDLR</h3>
            <p>one week | group project</p>
            <i className="devicon-react-plain"></i>
            <i className="devicon-python-plain"></i>
            <i className="devicon-postgresql-plain"></i>
            <i className="devicon-flask-original colored"></i>icons
            <p>A full-stack Dating App using Python, Flask, PostgreSQL and React.
            Users can swipe for left or right  and once matched
            can communicate through real-time messaging.
            </p>
            <p>Take a look: </p>
            <a className="singleIcon" href="https://github.com/rachel-beale/project-4" target="_blank">
              <i className="devicon-github-original"></i>
            </a>

            <a className="singleIcon" href="https://rachel-kindlr.herokuapp.com/" target="_blank">
              <BsLink45Deg />
            </a>
          </div>
          <div className="middleBottom">
            <img src={match} />
          </div>
        </div>
        <div className="right">
          <img src={daisy} />
        </div>

      </div>

    </section>
  </>
}

export default Kindlr