import React, { useState } from "react";
import ListItem from "./ListItem";
import { useItems } from "../hooks/useItems";
import { useSEO } from "../hooks/useSEO";

export type Item = {
    id: `${string}-${string}-${string}-${string}-${string}`
    timestamp: number
    name: string
}

export const ItemsList = () => {
    const {items, addItem, removeItem} = useItems()
    useSEO({
        title: `${items.length} | Items list APP`,
        description: "Add and remove items from list"
    }) 

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {elements} = e.currentTarget
        const itemInput = elements.namedItem("item")
        const isInput = itemInput instanceof HTMLInputElement
        if (!isInput || itemInput == null ) return null
        
        addItem(itemInput.value)

        itemInput.value = ""
    }

    const createHandleRemoveItem = (itemId: Item["id"]) => () => {
        removeItem(itemId)
    }

    return (
        <main>
            <aside>
                <h1>Items List APP</h1>
                <h2>Add and remove items from list</h2>
                <form onSubmit={handleSubmit} aria-label="Add items to list">
                    <input type="text" name="item" />
                    <button type="submit">Add item</button>
                </form>
            </aside>
            <section>
                <h3>Items list</h3>
                {items.length <= 0 ? (
                    <strong>There are no items yet</strong>
                ) : (
                    <ul>
                        {items?.map((item) => (
                            <ListItem {...item} key={item.id} handleClick={createHandleRemoveItem(item.id)}/>
                        )) }
                    </ul>
                )}
            </section>
        </main>
    )
}