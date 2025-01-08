import { describe, expect, it } from "vitest";
import { fizzbuzz } from "../utils/fizzbuzz";

/*
- show fizz if multiple of 3
- show buzz if multiple of 5
- show fizzbuzz if multiple of 3 and 5
- show the number if not multiple of any
*/


describe("fizzbuzz", () : void => {
  // it("should be a function", () : void => {
  //   expect(fizzbuzz).toBeTypeOf("function")
  // })
  it("should have 1 argument", () : void => {
    expect(() => fizzbuzz()).toThrow(`Expected 1 arguments, but got 0`)
  })

  it("should accept only numbers", () : void => {
    expect(() => fizzbuzz("hello")).toThrow(`Argument must be a number, you provided string`)
  })

  it("should return fizz if number is multiple of 3", () : void => {
    [3,6,9,12].forEach((number) => {
      expect(fizzbuzz(number)).toBe("fizz")
    })
  })
  it("should return buzz if number is multiple of 5", () : void => {
    [5,10,20].forEach((number) => {
      expect(fizzbuzz(number)).toBe("buzz")
    })
  })
  it("should return fizzbuzz if number is multiple of 3 and 5", () : void => {
    [15, 30].forEach((number) => {
      expect(fizzbuzz(number)).toBe("fizzbuzz")
    })
  })
  it("should return the number if not multiple of any", () : void => {
    expect(fizzbuzz(1)).toBe(1)
  })
  it("should return woff if the number provided is multiple of 7", () : void => {
    expect(fizzbuzz(7)).toBe("woff")
  })
  it("should return fizzwoff if the number provided is multiple of 3 and 7", () : void => {
    expect(fizzbuzz(21)).toBe("fizzwoff") 
  })
  it("should return buzzwoff if the number provided is multiple of 5 and 7", () : void => {
    expect(fizzbuzz(35)).toBe("buzzwoff")
  })
})