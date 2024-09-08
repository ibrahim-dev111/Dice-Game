import { useState } from "react";
import Gameplay from "../Components/Gameplay";
import StartGame from "../Components/StartGame";
function App() {

  
  const [isGameStarted , setIsGameStarted] =useState(false);

  const toggle = ()=>{
      setIsGameStarted((prevalue)=>!prevalue)
  }
  return (
    <>
    {isGameStarted?<Gameplay />:<StartGame toggle={toggle}/>}
    </>
  )
}

export default App

