import styled from "styled-components"
import "./NumberSelector.css"
const Numberselector = ({error,selectedNumber,setSelectedNumber}) => {
    let numArray = [1,2,3,4,5,6]

console.log(selectedNumber)
  return (
    <NumberSelectorContainer className="Numbers-container" >
        <p className="error">{error}</p>
       <div className="flex">
       {
            numArray.map((val,i)=>
                <Box 
            className="Box"
                key={i}
                isSelected = {val=== selectedNumber}
                onClick={()=>setSelectedNumber(val)}
                >{val}</Box>
                
            )
        }
       </div>
        <p>Select the Number</p>
    </NumberSelectorContainer>
  )
}

export default Numberselector

const NumberSelectorContainer = styled.div`
    .error{
        color:red;
        font-weight:600;
    }
    .flex{
        display:flex;
        gap:15px;
    }
    p{
        text-align:end;
    }
`

const Box = styled.div`
    width: 72px;
    height: 72px;
    display:grid;
    place-items:center;
    border:1px solid black;
    text-align:center;
    font-size: 24px;
    font-weight: 700;
    gap: 24px   ;
    background-color: ${(props)=>props.isSelected?"black":"white"};
    color:${(props)=>!props.isSelected?"black":"white"};
    cursor: pointer;
`;