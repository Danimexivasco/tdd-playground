import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react"
import React from "react";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

type CalculatorProps = {
  title?: string
}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const Calculator = ({title}: CalculatorProps) => {
  return (
    <div>
      <h1>{title}</h1>
      {numbers.map((number) => <span key={number}>{number}</span>)}
    </div>
  )
}

describe("Calculator", () => {
  afterEach(() => {
    cleanup();
    console.log("DOM after cleanup:", document.body.innerHTML);
  });
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
});