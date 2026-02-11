import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(0)
  let[counter, setcounter]=useState(0)
  // let count = 15;
  
  
  const valueadd=()=>{
    if(counter < 20 ){
      setcounter(counter+1);
    }

    if(counter === 20){
      alert("Can't increase the value above 20")
    }

    // setcounter((prevcounter)=> prevcounter+1);
  }
  
  const removeValue =()=>{
    if(counter > 0 ){
      setcounter(counter-1);
    }
    if(counter === 0){
      alert("can't decrease the value below 0 ")
    }
  }
  
  const add3Value = ()=>{
    // count= count+1
    // count= count+1
    // count= count+1
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
  }

  const addvalue3 = ()=>{
    setCount((prevCount)=> prevCount+1)
    setCount((prevCount)=> prevCount+1)
    setCount((prevCount)=> prevCount+1)


  }

  const removeValue3 = ()=>{
    setCount((prevCount)=> prevCount-1)
    setCount((prevCount)=> prevCount-1)
    setCount((prevCount)=> prevCount-1)
  }

  return (
    <>
    <div className='flex items-center justify-between'>

    <div>
      <h1>Counter {counter}</h1>
      <button onClick={valueadd} >Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </div>
    </div>



      <div><h1>Counter(3 value) {count}</h1>
      <button onClick={addvalue3} >Add Value 3</button>
      <br/>
      <button onClick={removeValue3}>Remove Value 3 </button>
      <br />
      <button onClick={add3Value}>Not woking for 3 </button>
      </div>
      
    </>
  )
}

export default App
