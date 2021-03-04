// Kindlr
import logo from '../images/kindlr/logo.png'
import main from '../images/kindlr/main.png'
import match from '../images/kindlr/match.png'
import daisy from '../images/kindlr/daisy.png'
// Seeded
import seededLogo from '../images/seeded/seededLogo.png'
import ferngram from '../images/seeded/ferngram.png'
import plantSearch from '../images/seeded/plantSearch.png'
import home from '../images/seeded/home.png'
// Moved
import movie from '../images/moved/movie.png'
import results from '../images/moved/results.png'
import searchMovie from '../images/moved/searchMovie.png'
import singleMovie from '../images/moved/singleMovie.png'
// Frogger
import frogger from '../images/frogger/frogger.png'
import gameOver from '../images/frogger/gameOver.png'
import full from '../images/frogger/full.png'
import howTo from '../images/frogger/howTo.png'
const projectInfo = [
  [{
    name: 'KINDLR',
    projectType: 'One Week | Group Project',
    description: 'For our final project, as a team of 3 we built a full-stack Dating App using Python, Flask, PostgreSQL & React. Users swipe left or right and once matched can communicate through real-time messaging. My focus for this project was the backend development as well as the front-end logic for matching users and the messaging service. ',
    github: 'https://github.com/rachel-beale/project-4',
    link: 'https://rachel-kindlr.herokuapp.com/',
    leftTop: logo,
    leftBottom: match,
    // middleBottom: match,
    right: daisy,
    iconOne: 'devicon-react-plain',
    iconTwo: 'devicon-python-plain',
    iconThree: 'devicon-postgresql-plain',
    iconFour: 'devicon-flask-original'
  }],
  [{
    name: 'SEEDED',
    projectType: 'One Week | Group Project',
    description: 'In teams of four, we had eight days to create a full-stack MERN application. This feature rich app helps people find plant sitters, and has features including message boards, photo based social media and integrated map. My focus was in the search functionality, map and user profile, as well as being joint responsible for styling the app. This was the first project that we coded collaboratively using Git branches, which helped me understand the complexities of git and the importance of communication within a team.',
    github: 'https://github.com/rachel-beale/project-3',
    link: 'https://rachel-beale.github.io/project-2/',
    leftTop: seededLogo,
    leftBottom: plantSearch,
    // middleBottom: ferngram,
    right: home,
    iconOne: 'devicon-react-plain',
    iconTwo: 'devicon-nodejs-plain',
    iconThree: 'devicon-mongodb-plain',
    iconFour: 'devicon-express-original'
  }],
  [{
    name: 'MOVED',
    projectType: 'Two Days | Pair Project',
    description: 'In pairs we were tasked with creating a multi-page app that consumes a public API in a 48 hour hackathon. MOVED is a movie search app that searches and filters films depending on the users choice. This challenge was mainly completed by pair programming using VSCode liveshare.',
    github: 'https://github.com/rachel-beale/project-2',
    link: 'https://rachel-beale.github.io/project-2',
    leftTop: movie,
    leftBottom: results,
    // middleBottom: searchMovie,
    right: singleMovie,
    iconOne: 'devicon-react-plain',
    iconTwo: 'devicon-github-original',
    iconThree: '',
    iconFour: ''
  }],
  [{
    name: 'FROGGER',
    projectType: 'One Week | Solo Project',
    description: 'Recreated the classic game frogger using pure JavaScript in one week. This game involved lots of logical thinking and some tricky components such as multiple automated moving elements, crash detection and timers.',
    github: 'https://github.com/rachel-beale/project-1',
    link: 'https://rachel-beale.github.io/project-1/',
    leftTop: frogger,
    leftBottom: gameOver,
    // middleBottom: howTo,
    right: full,
    iconOne: 'devicon-javascript-plain',
    iconTwo: 'devicon-html5-plain',
    iconThree: 'devicon-css3-plain',
    iconFour: ''
  }]
]

export default projectInfo