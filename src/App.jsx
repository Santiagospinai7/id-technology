import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Banner from './components/home/Banner'
import Slider from './components/home/Slider'
import ChooseUs from './components/home/ChooseUs'

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
      // in base of the code below I need to create a first  div that set a margin left-right 10% width screen and then inside another dive that center al the things inside but in base of the limitation of the parent div
      <div className="min-w-[390px] mx-auto">
        <div className="max-w-screen-xl mx-auto">
          <NavBar />
          <Banner />
        </div>
        <div className="w-full"> 
          <Slider />
        </div>
        <div className="max-w-screen-xl mx-auto">
          <ChooseUs />
        </div>
      </div>
    )
  }

  return content
}

export default App
