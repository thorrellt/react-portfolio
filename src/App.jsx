import { useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Alert >This is a Button</Alert>
      <Button>Test Button</Button>
      
    </div>
  )
}

export default App
