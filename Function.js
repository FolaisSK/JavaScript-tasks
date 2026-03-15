// Function Declaration
function add(){
    console.log(2+2)
}

// Function Expression
const subtract = function (){
    console.log(4-2)
}

// Arrow function 😭
const divide = (firstNumber, secondNumber) =>{
    return firstNumber / secondNumber
}
console.log(divide(10,2))
console.log("😭")

// Nested Function
function nestFunction(param){
    let number = 7;

    function add(paramOne){
        let sum = number + paramOne
        return sum
    }

    function subtract(paramTwo){
        let difference = number - paramTwo
        return difference
    }

    function multiply(paramThree){
        let product = number * paramThree
        return product
    }

    return{
        sum: add(param),
        difference: subtract(param),
        product: multiply(param)
    }
}

console.log(nestFunction(6).product)


//Using Arrow Function with nested functions
function nestFunctionWithArrowFunction(param){
    let number = 7;

    return{
        sum: () => number + param,
        difference: () => number - param,
        product: () => number * param
    }
}

console.log(nestFunctionWithArrowFunction(6).sum())


let numbers = [2,3,4,5,6,8]

function manipulateArray(array, callbackFunction){
    return callbackFunction(array);
}

function getEvenNumbers(numbers){
    let newArray = [];
    for(i of numbers){
        if(i % 2 === 0){
            newArray.push(i)
        }
    }
    return newArray;
}

console.log(manipulateArray(numbers, getEvenNumbers))


console.log(manipulateArray(numbers, (numbers)=>{
    let newArray = [];
    for(i of numbers){
        if(i % 2 !== 0){
            newArray.push(i)
        }
    }
    return newArray;
}))
