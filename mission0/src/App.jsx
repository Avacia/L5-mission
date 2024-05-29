import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function Count(){
    setCount(count + 1)
  }
  
  return (
    <div>
      <h1>Hello World!</h1>
      <button onClick={Count}>Count {count}</button>
    </div>
  )
}

export default App
