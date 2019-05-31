export default function RigthArrow(props) {
    function handleClick() {
        return props.clicked(-1)
    }
    return (
        <button type="button" onClick={handleClick} disabled={props.disabled}>{"<"}</button>
    )
}