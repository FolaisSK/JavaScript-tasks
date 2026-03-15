
const getSmallestNumber = function (numbers){
    let smallestNumber = numbers[0];
    for(let count = 0; count < numbers.length; count++){
        if(numbers[count] < smallestNumber){
            smallestNumber = numbers[count];
        }
    }
    return smallestNumber;
}
function getFactors(numbers){
    let factors = []
    let smallestNumber = getSmallestNumber(numbers)

    for(let i = 2; i < smallestNumber; i ++){
        let counter = 0;

        for(let index = 0; index < numbers.length; index++){
            if(numbers[index] % i === 0){
                counter += 1;
            }
        }
        if(counter === numbers.length){
            factors.push(i);
        }
        counter = 0;
    }
    return factors;
}


let setOne = [4,6,8]
let setTwo = [18,12,9]

console.log(getFactors(setOne));
console.log(getFactors(setTwo));