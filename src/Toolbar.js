import React from 'react'
import ToolbarButton from './ToolbarButton'

const toolbarButtons = [
    {
        id: 0,
        text: "Shape",
        color: "primary"
    },
    {
        id: 1,
        text: "Paint",
        color: "danger"
    },
    {
        id: 3,
        text: "Text",
        color: "primary"
    },
]

// [<ToolbarButton buttonText="Color"/>, <ToolbarButton buttonText="Shape"/>, <ToolbarButton buttonText="Select"/>]

export default function Toolbar() {
    return (
        <div>
            { toolbarButtons.map(toolbarButton => <ToolbarButton buttonInfo={toolbarButton} key={toolbarButton.id}/>) }
        </div>
    )
}
