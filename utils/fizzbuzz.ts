export const fizzbuzz = (number: number) => {
  if (!number) throw new Error(`Expected 1 arguments, but got 0`)
  if (typeof number !== "number")  throw new Error(`Argument must be a number, you provided ${typeof number}`)

  let output = ""

  const multiples = {
    3: "fizz",
    5: "buzz",
    7: "woff"
  }

  Object.entries(multiples).forEach(([multiplyer, word]) => {
    if (number % Number(multiplyer) === 0) output += word
  })

  return output === "" ? number : output
}