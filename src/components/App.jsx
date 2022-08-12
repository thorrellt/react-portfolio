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
      <Alert >This is a Alert</Alert>
      <Button className="red ">Test Button</Button>
      
    </div>
  )
}

export default App
