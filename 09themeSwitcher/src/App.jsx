
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './contexts/theme'
import { useEffect } from 'react'

function App() {
  // give default because initially or on refresh it should have a value and we set it to light
  const [themeMode , setThemeMode] = useState("light")  

  const lightTheme = ()=>{
    setThemeMode("light");
  }
  const darkTheme = ()=>{
    setThemeMode("dark");
  }

  // actual chnage  in theme 
  useEffect(() => {
  const html = document.documentElement

  if (themeMode === "dark") {
    html.classList.add("dark")
  } else {
    html.classList.remove("dark")
  }
}, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <h1 className='text-3xl font-bold'>Code with Hitesh Sir</h1>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <Card />
          <div className="w-full max-w-sm mx-auto">

          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
