import { useState } from 'react'
import './App.css'
import Home from './pages/Home'

function App() {
  let content

  const [isLoading, setIsLoading] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)

  if (isLoading) {
    content = <div>Loading...</div>
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
    }, 2000)
  }


  if (isSuccess) {
    content = (
      <>
        <h1>ID TECHNOLOGY</h1>
        <Home />
      </>
    )
  }

  return content
}

export default App
