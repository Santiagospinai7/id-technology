import { useState, useEffect } from 'react'

const ThemeToggle = () => {
  const themeInit = localStorage.getItem('theme') || 'light'
  const [theme, setTheme] = useState(themeInit)

  useEffect(() => {
    if(theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme])
  
  const handleThemeSwitch = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className='h-screen bg-white dark:bg-black flex justify-center items-center'>
      <button className='bg-green-200 p-4 rounded-3xl' onClick={handleThemeSwitch}>
        {(theme === 'dark' ? 'Light Mode' : 'Dark Mode')} 
      </button>
    </div>
  )
}

export default ThemeToggle
