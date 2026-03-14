import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import App2 from './App2.jsx'




function MyApp(){
  return(
    <>
      <h1>create function in main jsx file </h1>
    </>
  )
}

// framwork have bunderls that convert js to jsx format , as MyApp convert to jsx format like below react element 


// react accept a function ( that convert to pared and than render ) or a parsed  element to render that is prefixed 
const reactElement = {
    type : 'a',
    props : {
        href:'https://www.google.com/',
        target : '_blank'
    },
    children : 'Click me to visit Google'
}

const anotherElement = (
  <a href="https://www.google.com" target='_blank'>Click here</a>
)

// React createElement have fixed syntax so it will render easily 
const userName = "this is evaluated, so direct render this text instead of username , because it exprect evaluated js not for evaluation "
const reactElement1 =  React.createElement(
  'a',
  {href:'https://www.google.com/', target : '_blank'},
  'Click to visit Google',
  userName
)




createRoot(document.getElementById('root')).render(
  
 <StrictMode>
  <App/>
  <App2/>
 </StrictMode>

  // reactElement1
)
