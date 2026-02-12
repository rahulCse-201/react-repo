import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from'./Components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="text-3xl font rounded-xl p-2.5 bg-green-400 text-black mb-5">Hello world!</h1>
      <Card name='Rahul' btntext='click me '   />
      <Card name='Saurabh'   />
    </>
  )
}

export default App
