const {getEvenNumbers, getOddNumbers, addTwo, multiplyTwo} = require('./javascript')
const assert = require("node:assert");


test("add two numbers", ()=>{
    expect(2+2).toBe(4)
})

test("subtract two numbers", ()=>{
    expect(5-1).toBe(4)
})

test("for even numbers", ()=>{
    let numbers = [9,4,6,3,7,7] // Arrange
    let result = getEvenNumbers(numbers) // Act
    expect(result).toEqual([4,6])
})

test("for odd numbers", ()=>{
    let numbers = [9,4,6,3,7,7] // Arrange
    let result = getOddNumbers(numbers) // Act
    expect(result).toEqual([9,3,7,7])
})

test("for even numbers", ()=>{
    let numbers = [9,4,6,3,7,7]
    let result = addTwo(numbers)
    expect(result).toEqual([11,6,8,5,9,9])
})

test("multiply each number by 2", () =>{
    let numbers = [6,1,3,5]
    let answer = multiplyTwo(numbers)
    expect(answer).toEqual([12,2,6,10])
})

test("getEvenNumbers", () =>{
    let numbers = [2,1,4,8,7,10]
    let answer = [2,4,8,10]
    let result = getEvenNumbers(numbers)
    expect(result).toEqual(answer)
})