import React from 'react'
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
// import 'pure-react-carousel/dist/react-carousel.es.css'
import Kindlr from './projects/kindlr'

const Projects = () => {
  return <>
    <div id="projects">
      <h2>Projects</h2>
      <Kindlr />



      {/* 
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>I am the first Slide.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider> */}
    </div>
  </>
}

export default Projects 