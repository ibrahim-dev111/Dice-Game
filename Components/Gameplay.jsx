import React, { useState } from 'react'
import Totalscore from './Totalscore'
import Numberselector from './Numberselector'
import "./Gameplay.css"
import RoleDice from './RoleDice'

const Gameplay = () => {
  const msgArray = ["Every roll is  new chance. Embrace the uncertainty and keep playing with heart.","In every game of chance, it’s the courage to keep rolling that defines your true strength",
    "Even when the dice don’t match, your spirit can. Stay positive and let your determination be your guide","The game isn’t over until you say it is. Keep the faith and let your perseverance shape your destiny",
    "Sometimes the dice don’t roll in your favor, but your attitude can always be a winning one.","Rise to the challenge, no matter how the dice fall","Every roll is a step towards your next win.","When dice don't match, let resilience be your guide.","Unpredictability is part of the thrill. Stay positive.","A single roll doesn’t define you; your attitude does."
  ]
  const [selectedNumber , setSelectedNumber] = useState()
  const [currentDice , setCurrentDice] = useState(1)
  const [score , setScore]  =useState(0);
  const [error,setError] = useState("")
  const [mssg,setMssg] = useState("")
  
  const generateRandomNumber=(min,max)=> {
    return Math.floor(Math.random() * (max - min)+min);
}


const rolldice = (pre)=>{
  if (!selectedNumber){
    setError("Please Select The Number !!!")
    return
  } 
  setError("")

  const randomnumber = generateRandomNumber(1,7)
  setCurrentDice((pre)=>randomnumber)

  const randomMssg = msgArray[randomnumber]
  

if (selectedNumber===randomnumber){
  setScore((pre)=>pre+randomnumber)
  setMssg("Hurray You Did It, Keep Going")
}
else{
  setScore((pre)=>pre-2)
  setMssg(randomMssg)
}

setSelectedNumber(undefined)
}




  return (
    <>    <div className='Top-container'>
        <Totalscore score={score}/>
        <Numberselector error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>


    </div>
    <RoleDice mssg={mssg} currentDice={currentDice} rolldice={rolldice}/>
    </>

  )
}

export default Gameplay