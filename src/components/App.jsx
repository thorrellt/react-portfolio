import { useState, useEffect } from 'react'
import MainNav from './MainNav'
import Heading from './Heading'
import AboutMe from './AboutMe'
import Projects from './Projects'
import ContactMe from './ContactMe'
import '../styles/App.css'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../scss/custom.scss'

function updateActiveNav(hash){
  const sections = document.getElementsByClassName("main-section")
  const sectionsArr = Array.prototype.slice.call(sections)
  sectionsArr.forEach(section => {
    if(`#${section.id}` === hash){
      section.classList.add("active")
    } else {
    section.classList.remove("active")
    }
  })
}

function App() {
  /**
   * wondow width to be passed to components
   * for responsive design choices
   * for circumstances where bootstrap
   * doesnt have built in responsive classes
   */
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", watchWidth)

    return function () {
      window.removeEventListener("resize", watchWidth)
    }
  }, [])

  const [currentHash, setCurrentHash] = useState('#Heading')
  const [lastUpdateTime, setLastUpdateTime] = useState(Date.now())

  //update URL with current #anchor on scroll
  $(function () {
    $(document).scroll(function () {
      $('.main-section').each(function () {
        var top = window.pageYOffset;
        var distance = top - $(this).offset().top;
        var hash = '#' + $(this).attr('id');


        if (distance < 30 && distance > -30 && currentHash != hash) {
          // console.log("distance:: " + distance)
          // console.log("hash:: " + hash)
          // console.log("currentHash:: " + currentHash)

          setCurrentHash(() => {
            // console.log("setter ran for::" + hash)
            return hash
          })
          
          // updateActiveNav(hash)
          // setCurrentHash(hash)

        }
      });
    });
  });

  useEffect(() => {
    console.log("USE EFFECT RAN FOR::" + currentHash)
    const currTime = Date.now()
    if (currTime - lastUpdateTime > 500) {
      // console.log("ran")
      history.replaceState(null, '', currentHash);
      setLastUpdateTime(currTime);
    }
  }, [currentHash])

  return (
    <div className="App">
      <MainNav
        currentHash={currentHash} 
        setCurrentHash={setCurrentHash} />
      <Heading windowWidth={windowWidth} />
      <AboutMe />
      <Projects />
      <ContactMe />

    </div>
  )
}

export default App
