import "./Totalscore.css"
const Totalscore = ({score}) => {



  return (
    <div className="total-score-container">
        <h1>{score}</h1>
        <p>Total Score</p>
    </div>
  )
}

export default Totalscore