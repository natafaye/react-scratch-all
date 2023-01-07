import React from 'react'

export default function SearchBar(props) {
  return (
    <input type="text" placeholder={props.inputText}/>
  )
}

// props = { inputText: "Search... }