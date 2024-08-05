import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './home/Footer'

function Layout() {
  return (
      <main className="page-content bg-gray-50 dark:bg-slate-800">
        <NavBar />
        <Outlet />
        <Footer />
      </main>
  )
}

export default Layout
