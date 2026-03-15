// function getEvenNumbers(numbers) {
//     let newArray = []
//     for (const number of numbers) {
//         if (number % 2 === 0) {
//             newArray.push(number)
//         }
//     }
//     return newArray
// }

function getOddNumbers(numbers) {
    let newArray = []
    for (const number of numbers) {
        if (number % 2 !== 0) {
            newArray.push(number)
        }
    }
    return newArray
}

function addTwo(numbers) {
    let newArray = []
    numbers.forEach(element => {
       let  answer = element + 2
        newArray.push(answer)
    })
    return newArray
}

const multiplyTwo = (numbers) => {
    let result = numbers.map((number) => (number * 2))
    return result
}

function getEvenNumbers(numbers) {
    return numbers.filter((number) => (number % 2 === 0))
}


module.exports= {getEvenNumbers, getOddNumbers, addTwo, multiplyTwo};