import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    console.log(process.env.VITE_APPWRITE_URL);  // not use process.env, use import.meta.env
    console.log(import.meta.env.VITE_APPWRITE_URL);
    <h1>A blog app with Appwrite</h1>
    </>
  )
}

export default App
