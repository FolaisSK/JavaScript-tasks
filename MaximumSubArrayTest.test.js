const {getSubArrays, getSumOfSubArrays, getHighestSubArray} = require("./MaximumSubArray");


test("get sum of sub arrays from main array", () => {
    console.log(getSubArrays([2,1,5,6,2,1]))
    console.log(getSumOfSubArrays([2,1,5,6,2,1]))
    let numbers = [2,1,5,6,2,1]
    let result = [8,12,13,9]
    expect(getSumOfSubArrays(numbers)).toEqual(result)
})

test("get highest sub array from main array", () => {
    let numbers = [12,1,5,6,2,1]
    let result = [12,1,5];
    //console.log(getHighestSubArray(numbers))
    expect(getHighestSubArray(numbers)).toEqual(result)
})