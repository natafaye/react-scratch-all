import ToolbarButton from "./ToolbarButton"

export default function Toolbar(props) {

    const toolbarButtons = [
        {
            id: 0,
            text: "Undo"
        },
        {
            id: 1,
            text: "Redo"
        },
        {
            id: 2,
            text: "Print",
            hasDropdown: false
        },
    ]

    // [
    //     <ToolbarButton text="Undo"/>,
    //     <ToolbarButton text="Redo"/>,
    //     <ToolbarButton text="Print"/>
    // ]

    let className = "p-4 "
    if (props.dark) {
        className += "bg-dark text-white"
    } else {
        className += "bg-light"
    }
    
    return (
        <div className={className}>
            { toolbarButtons.map( button => <ToolbarButton key={button.id} buttonData={button} /> ) }
        </div>
    )
}