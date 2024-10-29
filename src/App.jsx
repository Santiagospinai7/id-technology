import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import DevelopmentService from './pages/DevelopmentService' 
import HwDistributionService from './pages/HwDistributionService'
import TechnicalSupportService from './pages/TechnicalSupportService'
import AutomatizationService from './pages/AutomatizationService'
import Layout from './components/Layout'


function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
    }, 1000)
  }, [])

  let content

  if (isLoading) {
    content = <div>Loading...</div>
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
              <Route path="/services/development" element={<DevelopmentService />} />
              <Route path="/services/hardware-software-distribution" element={<HwDistributionService />} />
              <Route path="/services/support" element={<TechnicalSupportService />} />
              <Route path="/services/automatizacion-de-procesos" element={<AutomatizationService />} />
            </Route>
          </Routes>
        </div>
      </div>
    )
  }

  return content
}

export default App