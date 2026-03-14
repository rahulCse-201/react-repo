import { useState, useCallback, useEffect, useRef } from "react";


function App() {
  // const [length, setLength] = useState<number>(10); 
  const [length, setLength] = useState(10);
  const [numAllowed, setNumAllowed] = useState(true);
  const [charsAllowed, setCharsAllowed] = useState(true);
  const [upperAllowed, setUpperAllowed] = useState(true);
  const [password, setPassword] = useState("");

// ref hook 
  const passwordRef = useRef<HTMLInputElement>(null);



  // here we use usecallbak hooks for optimization, this hook use memomization technique 
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charsAllowed) str += '!@#$%^&*()_+~`|}{[]\:;?><,./-='

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
 
    // is this can't access without pass in dependencies => reason memoization this is for optimization this in cache 
    setPassword(pass)
  }, [length, charsAllowed, setPassword]);  // here are pass depedencies for optimization , can make without useCallback -> callbakc use for optimization 




const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select();
  // passwordRef.current?.setSelectiononRange(0,4)
  window.navigator.clipboard.writeText(password)
}, [password])


// useEffect for call password generator when any of the dependencies change  , this is for optimization , we can also do this without useEffect for this we need to add function call if any of the dependencies change but this is not good for optimization because we need to add function call in every onChange event but with useEffect we can do this in one place and it will call the function when any of the dependencies change
useEffect(()=>{
  passwordGenerator()
}, [length, numAllowed, charsAllowed])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly   // user restrice to edit password but user can't because it's handle by react 
            ref= {passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={20}
              value={length}  // what happen if i didn't add this 
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label >Length: {length}</label>
          </div>

        
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}  // what  did this here 
              id="numInput"
              onChange={() => { setNumAllowed((prev) => !prev) }}   // How i know this type thing i have access the previous value 
              onChangeCapture={()=> passwordGenerator()}
            />
            <label htmlFor="numInput" >Numbers</label> 
          </div> 

          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked = {charsAllowed}
            id="charInput"
            onChange={()=>{
              setCharsAllowed((prev)=> !prev);
            }}
             />
             <label htmlFor="charInput">Characters</label>
          </div> 
          
        </div>
      </div>
    </>
  )
}

export default App
