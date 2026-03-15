const {getEvenNumbers, sortEvenNumbers} = require('/DescendingEvenNumbers')

test("test to get all even numbers from two lists", () =>{
    let firstSet = [2,1,6,7,10]
    let secondSet = [11,4,12,5,8]
    let answer = [2,6,10,4,12,8]
    expect(getEvenNumbers(firstSet, secondSet)).toEqual(answer)
})

test("test to get all even numbers from two lists sorted in descending order", () =>{
    let firstSet = [2,1,6,7,10]
    let secondSet = [11,4,12,5,8]
    let answer = [2,6,10,4,12,8]
    expect(getEvenNumbers(firstSet, secondSet)).toEqual(answer)
    let sortedList = [12,10,8,6,4,2]
    expect(sortEvenNumbers(firstSet, secondSet)).toEqual(sortedList)
})

test("test to get all even numbers sorted from two lists", () =>{
    let firstSet = [2,1,6,7,8,10]
    let secondSet = [11,4,12,5,8,2]
    let answer = [2,6,8,10,4,12,8,2]
    expect(getEvenNumbers(firstSet, secondSet)).toEqual(answer)
    let sortedList = [12,10,8,8,6,4,2,2]
    expect(sortEvenNumbers(firstSet, secondSet)).toEqual(sortedList)
})