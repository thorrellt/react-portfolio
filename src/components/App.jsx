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


  //update URL with current #anchor on scroll
  $(function () {
    var currentHash = "#Heading"
    $(document).scroll(function () {
      $('.main-section').each(function () {
        var top = window.pageYOffset;
        var distance = top - $(this).offset().top;
        var hash = '#' + $(this).attr('id');
        // console.log(hash)

        if (distance < 30 && distance > -30 && currentHash != hash) {
          // alert(hash);
          console.log(hash)
          history.replaceState(null, '', hash);
          currentHash = hash;
        }
      });
    });
  });

  return (
    <div className="App">
      <MainNav />
      <Heading windowWidth={windowWidth} />
      <AboutMe />
      <Projects />
      <ContactMe />

    </div>
  )
}

export default App
