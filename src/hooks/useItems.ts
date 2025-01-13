import React, {useState} from "react";
import { type Item } from "../components/ItemsList";

export const useItems = () => {
    const [items, setItems] = useState<Item[]>([])

    const addItem = (value: string) => {
        const newItem: Item = {
            id: crypto.randomUUID(),
            timestamp: Date.now(),
            name: value
        }
        console.log("newItem", newItem);
        setItems(prevItems => [...prevItems, newItem])
    }

    const removeItem = (itemId: Item["id"]) => {
        setItems(prevItems => prevItems.filter(i => i.id !== itemId))
    }

    return {
        items,
        addItem,
        removeItem
    }
}