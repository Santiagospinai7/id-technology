import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  let content

  const [isLoading, setIsLoading] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)
  
  if (isLoading) {
    content = <div>Loading...</div>
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
    }, 0)
  }

  if (isSuccess) {
    content = (
      <>
        <NavBar />
      </>
    )
  }

  return content
}

export default App
