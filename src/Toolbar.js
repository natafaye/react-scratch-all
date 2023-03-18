import React from 'react'
import ToolbarButton from './ToolbarButton'

export default function Toolbar() {
    const toolbarButtons = [
        {
            text: "Undo",
            action: () => console.log("Undo!")
        },
        {
            text: "Redo",
            action: () => console.log("Redo!")
        },
        {
            text: "Print",
            action: () => console.log("Print!")
        }
    ]
    return (
        <div>
            {/* <ToolbarButton text="Undo" onClick={ () => console.log("Undo!") }/>
            <ToolbarButton text="Redo" onClick={ () => console.log("Redo!") }/>
            <ToolbarButton text="Print" onClick={ () => console.log("Print!") }/> */}

            { toolbarButtons.map( button => <ToolbarButton key={button.text} text={button.text} onClick={button.action}/> ) }
        </div>
    )
}
