import React from 'react'
import { useParams } from 'react-router-dom'

export default function MenuItemPage() {
    const { itemId } = useParams();

    return (
        <div>MenuItemPage for the item with id { itemId }</div>
    )
}
