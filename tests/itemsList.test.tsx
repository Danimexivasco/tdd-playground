
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import React from "react";
import { ItemsList } from "../src/components/ItemsList";

/*

    TODOS:
    - test para useSEO
    - pasar custom hooks a reducer
    - utilizar localstorage para guardar los items

    !- test para hooks
    !- usar hooks para useItems
    !- usar tests, antes de refactorizar
    !- Crear app sencilla lista, crear, eliminar ítems
    !- usar input no  controlado
    !- usar createHandleRemoveItem
    !- hook para useSeo
*/



describe("ItemsList", () => {
    beforeEach(cleanup)
    it("should render", () : void => {
        render(<ItemsList />)
    })

    it("should render empty list at start", () : void => {
        render(<ItemsList />)
        expect(screen.getByText("There are no items yet")).toBeDefined()
    })

    it("should add and remove items", async () : Promise<void> => {
        const user = userEvent.setup()

        render(<ItemsList />)

        const input = screen.getByRole("textbox")
        expect(input).toBeDefined()

        const button = screen.getByRole("button", {name: "Add item"})
        expect(button).toBeDefined()

        const from = screen.getByRole("form")
        expect(from).toBeDefined()

        
        await user.type(input, "Walk with Bas")
        await user.click(button!)
        
        const list = screen.getByRole("list")
        expect(list).toBeDefined()
        expect(screen.getByText("Walk with Bas")).toBeDefined()
        expect(list.childNodes.length).toBe(1)
        const item = screen.getByText("Walk with Bas")
        expect(item).toBeDefined()

        const removeButton = item.querySelector('button')
        expect(removeButton).toBeDefined()
        await user.click(removeButton!)

        expect(screen.getByText("There are no items yet")).toBeDefined()
    })

})