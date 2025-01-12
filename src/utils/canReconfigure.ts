export const canReconfigure = (from: string, to: string) : boolean => {
  if (!from && !to) throw new Error(`Expected 2 arguments, but got 0`)
  if (!from || !to) throw new Error(`Expected 2 arguments, but got 1`)

  if (typeof from !== "string" || typeof to !== "string") throw new Error(`Argument must be a string`)

  if (from.length !== to.length) return false

  // if ([... new Set(from.split(""))].length !== [... new Set(to.split(""))].length) return false
  const hasSameUniqueLetters = new Set(from).size === new Set(to).size
  if (!hasSameUniqueLetters) return false

  const transformations = {}

  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]

    const storedLetter = transformations[fromLetter]
    
    if (storedLetter && storedLetter !== toLetter) return false

    transformations[fromLetter] = toLetter
  }
  
  return true
}