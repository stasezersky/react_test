import SingleAnswer from "./SingleAnswer"

export default function Answers(props) {
    let ansList = props.anslist.map(num => (
        <li key={num}><SingleAnswer checkedAns={num === props.checkedAns}
             handleCheck={props.handleCheck} answer={num} /></li>
    ))
    return (
        <div>
            <p>{props.ask}</p>
            <br />
            <ul  >
                {ansList}
            </ul>
        </div>
    )
}