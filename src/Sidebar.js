import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Sidebar({ backgroundColor, links }) {
  return (
    <div className={"p-3 text-white bg-" + backgroundColor}>
        { links.map(link => <NavLink key={link} to={"/place/" + link}>{link}</NavLink>)}
    </div>
  )
}
