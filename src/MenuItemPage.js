import React from 'react'
import { useParams } from 'react-router'

export default function MenuItemPage() {
    //const params = useParams()
    const { menuItem } = useParams()
    return (
        <div>This has information about {menuItem}</div>
    )
}
