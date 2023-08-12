export default function ToolbarButton({ color, message }) {
    return (
        <button className={"btn btn-" + color}>{message}</button>
    )
}