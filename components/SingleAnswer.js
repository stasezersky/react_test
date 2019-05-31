export default function SingleAnswer(props) {
    function handleClick(e){
        props.handleCheck(e.target.value)
    }
    return (
      <div>
        <input type="radio" checked={props.checkedAns} value={props.answer} name={props.answer} onClick={handleClick}/>
        <label htmlFor={props.answer}>{props.answer}</label>
      </div>
    )
  }