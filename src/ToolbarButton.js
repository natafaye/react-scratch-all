import React from 'react'

const ToolbarButton = (props) => {
    let divClass = ""
    if(props.large) {
        divClass="fs-3"
    }
    return <div className={divClass}>{props.text}</div>
}

// props = {
//     text: "Copy",
//     large: true
// }

export default ToolbarButton