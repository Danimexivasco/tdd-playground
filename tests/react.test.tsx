import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react"
import React from "react";
import {Calculator, equalSign, numbers, operations} from "../src/components/Calculator";


/*
- render 4 rows
- render operations
- render euqal sign
- render input
- user input after clicking a number
- user input after clicking several number
- user input after clicking numbers and operations
user-event > fireEvent
install mathjs
- calculate based on user input and show the calculation
Crear app react desde 0
test coverage hacer
preguntar a chatgpt si es test de integración todo lo que hemos hecho
*/



describe("Calculator", () => {
  afterEach(cleanup);
  it("should render", () : void => {
    render(<Calculator />)
  })

  it ("should render title correctly", () => {
    const titleText = "Calculator title"
    render(<Calculator title={titleText} />)
    screen.getByText(titleText)
  })

  it("should render numbers", () => {
    render(<Calculator />)
    numbers.forEach((number) => {
      screen.getByText(number)
    })
  })

  it("should render 4 rows", () => {
    render(<Calculator />)
    const rows = screen.getAllByRole("row")
    expect(rows).toHaveLength(4)
  })

  it ("should render operations", () => {
    render(<Calculator />)
    operations.forEach((operation) => {
      screen.getByText(operation)
    })
  })

  it("should render equal sign", () => {
    render(<Calculator />)
    screen.getByText(equalSign)
  })

  it ("should render input", () => {
    render(<Calculator />)
    screen.getByRole("textbox")
  })

  it("should render user input after clicking a number", () => {
    render(<Calculator />)
    const one = screen.getByText("1")
    fireEvent.click(one)
    const input: HTMLInputElement = screen.getByRole("textbox")
    expect(input.value).toBe("1")
  })

  it("should render user input after clicking several number", () => {
    render(<Calculator />)
    const one = screen.getByText("1")
    fireEvent.click(one)
    const two = screen.getByText("2")
    fireEvent.click(two)
    const three = screen.getByText("3")
    fireEvent.click(three)
    const input: HTMLInputElement = screen.getByRole("textbox")
    expect(input.value).toBe("123")
  })

  it("should render user input after clicking numbers and operations", () => {
    render(<Calculator />)
    const one = screen.getByText("1")
    fireEvent.click(one)
    const plus = screen.getByText("+")
    fireEvent.click(plus)
    const five = screen.getByText("5")
    fireEvent.click(five)
    const input: HTMLInputElement = screen.getByRole("textbox")
    expect(input.value).toBe("1+5")
  })

  it("should calculate based on user input and show the calculation", () => {
    render(<Calculator />)
    const one = screen.getByText("1")
    fireEvent.click(one)
    const plus = screen.getByText("+")
    fireEvent.click(plus)
    const five = screen.getByText("5")
    fireEvent.click(five)
    const equal = screen.getByText("=")
    fireEvent.click(equal)
    const input: HTMLInputElement = screen.getByRole("textbox")
    expect(input.value).toBe("6")
  })

  it("should render user input after clicking numbers and operations and equal sign", () => {
    render(<Calculator />)
    const one = screen.getByText("1")
    fireEvent.click(one)
    const plus = screen.getByText("+")
    fireEvent.click(plus)
    const five = screen.getByText("5")
    fireEvent.click(five)
    const equal = screen.getByText("=")
    fireEvent.click(equal)
    const input: HTMLInputElement = screen.getByRole("textbox")
    expect(input.value).toBe("6")
    const minus = screen.getByText("-")
    fireEvent.click(minus)
    const four = screen.getByText("4")
    fireEvent.click(four)
    fireEvent.click(equal)
    expect(input.value).toBe("2")
  })
});