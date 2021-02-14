import React from 'react'
import { BsLink45Deg } from 'react-icons/bs'

const Frogger = () => {
  return <>
    <section id="projectMain">
      <div className="row">
        <div className="left">
          <div className="leftTop"></div>
          <div className="leftBottom"></div>
        </div>
        <div className="middle">
          <div className="middleTop">
            <h3>FROGGER</h3>
            <p>one week | solo project</p>
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-html5-plain"></i>
            <i className="devicon-css3-plain"></i>
            <p>Recreated the classic game frogger using pure JavaScript in one
            week. This game involved lots of logical thinking and some tricky
            components such as multiple automated moving elements, crash detection
            and timers.
            </p>

            <p>Take a look: </p>
            <a className="singleIcon" href="https://github.com/rachel-beale/project-1" target="_blank">
              <i className="devicon-github-original"></i>
            </a>

            <a className="singleIcon" href="https://rachel-beale.github.io/project-1" target="_blank">
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

export default Frogger