import React, { useState } from 'react'
import { BsLink45Deg } from 'react-icons/bs'

import projectInfo from './toShow'

const Projects = () => {
  const [page, setPage] = useState(1)
  const lastPage = 4

  function handlePage(e) {
    setPage(parseInt(e.target.id))
  }

  function handleRight() {
    if (page !== 1) {
      setPage(page + 1)
    }
  }

  function handleLeft() {
    if (page !== lastPage) {
      setPage(page - 1)
    }
  }
  console.log(page)



  return <>
    <div id="projects">
      <h2>Projects</h2>
      <div className="numbers">
        <p className="pages" onClick={handleLeft}>&lt;</p>
        <p className="pages" onClick={handlePage} id='1'>1</p>
        <p className="pages" onClick={handlePage} id='2'>2</p>
        <p className="pages" onClick={handlePage} id='3'>3</p>
        <p className="pages" onClick={handlePage} id='4'>4</p>
        <p className="pages" onClick={handleRight}>&gt;</p>
      </div>


      {projectInfo[page - 1].map((project, i) => {
        return <section key={i} id="projectMain">
          <div className="row">
            <div className="left">
              <div className="leftTop">
                <img src={project.leftTop} />
              </div>
              <div className="leftBottom">
                <img src={project.leftBottom} />
              </div>
            </div>
            <div className="middle">
              <div className="middleTop">
                <h3>{project.name}</h3>
                <p>{project.projectType}</p>
                <i className="devicon-react-plain"></i>
                <i className="devicon-python-plain"></i>
                <i className="devicon-postgresql-plain"></i>
                <i className="devicon-flask-original colored"></i>icons
                <p>{project.discription}</p>
                <p>Take a look: </p>
                <a className="singleIcon" href={project.github} target="_blank">
                  <i className="devicon-github-original"></i>
                </a>
                <a className="singleIcon" href={project.link} target="_blank">
                  <BsLink45Deg />
                </a>
              </div>
              <div className="middleBottom">
                <img src={project.middleBottom} />
              </div>
            </div>
            <div className="right">
              <img src={project.right} />
            </div>

          </div>

        </section>
      })}


      {/* 
      {page === 1 ?
        <Kindlr /> :
        <div></div>
      }
      {page === 2 ?
        <Seeded /> :
        <div></div>
      }
      {page === 3 ?
        <Moved /> :
        <div></div>
      }
      {page === 4 ?
        <Frogger /> :
        <div></div>
      } */}

    </div>
  </>
}

export default Projects 