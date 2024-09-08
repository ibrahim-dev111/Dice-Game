import styled from "styled-components"
import { useState } from "react"
import Rules from "./Rules"
const RoleDice = ({mssg,currentDice,rolldice}) => {


    const [ruleContainer,setRuleContainer] =useState(false)

    const displayRuleContainer = ()=>{
        setRuleContainer((pre)=>!ruleContainer)
    }



  return (
    <DiceContainer>
        <div className="dice"
        onClick={rolldice}>
            <img src={`../src/assets/Images/dice${currentDice}.png`} alt="" />
        </div>
        <p>Click On Dice To Roll</p>
        <p style={{color: "white"}}>{mssg}</p>
        <button onClick={displayRuleContainer} style={{padding:"6px 10px",fontSize:"larger",fontWeight:"700",background:"black",color:"white",cursor:"pointer"}}>Rules ?</button>
        {ruleContainer?<Rules/>:""}
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:48px;   
    
    .dice{
        cursor: pointer;
    }

    p{
        font-weight:500;
    }
`