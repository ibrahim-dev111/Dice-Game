import React, { useState } from 'react'
import dice_img from "../src/assets/Images/dices.png"
import "./startgame.css"
const StartGame = ({toggle}) => {




  return (
    <>
    <div className="start-container">
        <div className="dice-img">
            <img src={dice_img} alt="" />
        </div>
            <div className="dice-text">
                <div className="dice-game">
                    <h1>DICE GAME</h1>
                </div>
                <div className="play-btn">
                   <button onClick={toggle}>Play Now</button>
                </div>
            </div>
    </div>
        
    </>
  )
}

export default StartGame