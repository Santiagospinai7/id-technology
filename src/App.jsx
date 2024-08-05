import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Layout from './components/Layout'


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
      <div style={{ marginLeft: '0%', marginRight: '0%', width: '100%' }}>
        <div style={{ textAlign: 'center' }}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />

            </Route>
          </Routes>
        </div>
      </div>
    )
  }

  return content
}

export default App
