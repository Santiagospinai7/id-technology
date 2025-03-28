import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import AutomatizationService from './pages/AutomatizationService'
import DevelopmentService from './pages/DevelopmentService'
import Home from './pages/Home'
import HwDistributionService from './pages/HwDistributionService'
import Services from './pages/Services'
import TechnicalSupportService from './pages/TechnicalSupportService'
import PQRSFForm from './pages/pqrsf'
import ScrollToTop from './utils/scrollUtilis'

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
          <ScrollToTop />
          <Routes>
            <Route element={<Layout />}>
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<Services />} />
              <Route path="/servicios/desarrollo-de-software" element={<DevelopmentService />} />
              <Route path="/servicios/distribucion-de-hardware-y-software" element={<HwDistributionService />} />
              <Route path="/servicios/soporte-tecnico" element={<TechnicalSupportService />} />
              <Route path="/servicios/automatizacion-de-procesos" element={<AutomatizationService />} />
              <Route path="/pqrsf" element={<PQRSFForm />} />
            </Route>
          </Routes>
        </div>
      </div>
    )
  }

  return content
}

export default App