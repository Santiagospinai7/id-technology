import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Banner from './components/home/Banner'

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
      <div className='max-w-screen-xl flex flex-col justify-center items-center mx-auto'>
        <NavBar />
        <Banner />
      </div>
    )
  }

  return content
}

export default App
