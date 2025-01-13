import React from "react";
import { Item } from "./ItemsList";

type ItemProps = {
    name: string
    handleClick: (id: string) => void
}

export default function ListItem({name, handleClick}: ItemProps) {
    return (
        <li>
            {name}
            <button onClick={handleClick}>Remove</button>
        </li>
    )
}