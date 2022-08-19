import { useState, useEffect } from 'react'
import MainNav from './MainNav'
import Heading from './Heading'
import AboutMe from './AboutMe'
import Projects from './Projects'
import '../styles/App.css'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../scss/custom.scss'

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


  return (
    <div className="App">
      <MainNav />
      <Heading windowWidth = {windowWidth}/>
      <AboutMe />
      <Projects />

    </div>
  )
}

export default App
