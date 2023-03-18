import React from 'react'

export default function ToolbarButton(props) {
  return (
    <button className="btn btn-outline-secondary me-2" onClick={ props.onClick }>{ props.text }</button>
  )
}
