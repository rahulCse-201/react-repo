import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-6xl font-bold underline text-center text-blue-500">
      Todo with Local storage
    </h1>
    </>
  )
}

export default App
