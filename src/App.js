import React from 'react'
import SearchBar from './SearchBar'
import ToolbarButton from './ToolbarButton'

export default function App() {
  const p = <p>I'm a paragraph {5 + 3}</p>

  const sum = 5 + 3

  const toolList = [
    {
      id: 0,
      text: "Copy",
      large: true
    },
    {
      id: 1,
      text: "Cut",
      large: false
    },
    {
      id: 2,
      text: "Paste",
      humongous: true
    },
  ]

  //const toolBarButtons = toolList.map(tool => <ToolbarButton text={tool.text} large={tool.large}/>)

  // const toolBarButtons = [
  //   <ToolbarButton text="Copy" large={true}/>,
  //   <ToolbarButton text="Cut" large={false}/>,
  //   <ToolbarButton text="Paste" large={true}/>
  // ]

  // const toolBarButtons = [
  //   <div className="fs-3">Copy</div>,
  //   <div>Cut</div>,
  //   <div className="fs-3">Paste</div>
  // ]

  return (
    <div>
      <div className="bg-primary text-white">
        { toolList.map(tool => (
          <ToolbarButton text={tool.hello} large={tool.humongous}/>
        )) }
        <SearchBar inputText="Search..."/>
      </div>
      Natalie's App
      {p}
    </div>
  )
}


// props = {
//   text: "Copy",
//   large: true
// }





























// function isNotEmpty(paper) {
//   return paper !== '';
// }
// const isNotEmpty = (paper) => {
//   return paper !== '';
// }
// const isNotEmpty = paper => {
//   return paper !== '';
// }
// const isNotEmpty = paper => paper !== ''
// const isNotEmpty = p => p !== ''

// papers.filter(p => p !== '')