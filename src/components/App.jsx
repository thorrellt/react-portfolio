import { useState, useEffect } from 'react'
import MainNav from './MainNav'
import Heading from './Heading'
import '../styles/App.css'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../scss/custom.scss'

function App() {
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

    </div>
  )
}

export default App
