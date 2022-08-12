import { useState } from 'react'
import '../styles/App.css'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../scss/custom.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>This is a Heading</h1>
      <p>this is regular text</p>
      <h1 className='display-1'>this is Display</h1>
      <Button className="red ">Test Button</Button>
      
    </div>
  )
}

export default App
