import { useState } from "react"
import {InputoBox} from ' ./components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to , setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  
  

  return (
    <>
    </>
  )
}

export default App
