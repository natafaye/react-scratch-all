import React from 'react'

export default function ToolbarButton(props) {
    return (
        <button className={"btn btn-" + props.buttonInfo.color}>
            { props.buttonInfo.text }
        </button>
    )
}
