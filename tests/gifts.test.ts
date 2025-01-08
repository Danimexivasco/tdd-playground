import { expect } from "vitest";
import { it } from "vitest";
import { describe } from "vitest";
import { canReconfigure } from "../utils/canReconfigure";

/*
https://github.com/monicatvera/adventjs/blob/master/2021/23-fabrica/23-fabrica.md

Estamos en la fábrica de Santa Claus 🎅 creando regalos como si no hubiera un mañana.

Pensábamos que no íbamos a llegar pero Jelf Bezos ha tenido una idea genial para aprovechar las máquinas y optimizar al máximo la creación de regalos. 🎁

La configuración de las máquinas es un string. Podemos reconfigurarla para que haga otro regalo y, para ello, podemos cambiar cada carácter por otro.

Pero tiene limitaciones 🥲: al reemplazar el carácter se debe mantener el orden, no se puede asignar al mismo carácter a dos letras distintas (pero sí a si mismo) y, claro, la longitud del string debe ser el mismo.

Necesitamos una función que nos diga si podemos reconfigurar una máquina para que de un regalo pueda pasar a fabricar otro según las reglas mencionadas. Lo mejor es que veamos un ejemplo:

const from = 'BAL'
const to   = 'LIB'
const canReconfigure(from, to) // true
 la transformación sería así:
B -> L
A -> I
L -> B

const from = 'CON'
const to   = 'JUU'
const canReconfigure(from, to) // false
 no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO

const from = 'XBOX'
const to   = 'XXBO'
const canReconfigure(from, to) // false
 no se puede hacer la transformación:
X -> X
B -> X (FALLO, no mantiene el orden de transformación y la B no puede asignarse a la X que ya se asignó a otra)
O -> B
X -> O (FALLO, la X no puede asignarse a la O que ya se asignó a la X)

const from = 'XBOX'
const to   = 'XOBX'
const canReconfigure(from, to) // true

const from = 'MMM'
const to   = 'MID'
cons canReconfigure(from, to) // false
 no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)

const from = 'AA'
const to   = 'MID'
cons canReconfigure(from, to) // false -> no tiene la misma longitud
*/




describe("giftsMachine", () : void => {
  it ("should be a function", () : void => {
    expect(canReconfigure).toBeTypeOf("function")
  })
  it("should have 2 arguments", () : void => {
    expect(() => canReconfigure()).toThrow(`Expected 2 arguments, but got 0`)
    expect(() => canReconfigure("value")).toThrow(`Expected 2 arguments, but got 1`)
  })
  it("should have both arguments as strings", () : void => {
    expect(() => canReconfigure(1,3)).toThrow(`Argument must be a string`)
  })
  it("should return a boolean", () : void => {
    expect(canReconfigure("a", "b")).toBeTypeOf("boolean")
  } )
  it("should return false if the given arguments don't have the same length", () : void => {
    expect(canReconfigure("value", "value2")).toBe(false)
  })
  it("should return false if the given arguments don't have the same length even with the same unique letters", () : void => {
    expect(canReconfigure("aab", "ab")).toBe(false)
  })
  it("should return false if the arguments don't have the same number of unique letters", () : void => {
    expect(canReconfigure("abc", "ddd")).toBe(false)
  })
  it("should return false if strings has different order of transformations", () : void => {
    expect(canReconfigure("XBOX", "XXBO")).toBe(false)
  })
})