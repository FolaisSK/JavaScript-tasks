function getEvenNumbers(firstList, secondList) {
    let evenNumbers = [];
    for (let numbers of firstList) {
        if(numbers % 2 === 0) evenNumbers.push(numbers);
    }
    for (let number of secondList) {
        if(number % 2 === 0) evenNumbers.push(number);
    }
    return evenNumbers;
}

function sortEvenNumbers(firstList, secondList) {
    let evenNumbers = getEvenNumbers(firstList, secondList);

    for(let count = 0; count < evenNumbers.length; count++){
        for(let index = 0; index < evenNumbers.length - 1; index++){
            if(evenNumbers[index] < evenNumbers[index + 1]){
                evenNumbers[index] = evenNumbers[index] + evenNumbers[index + 1];
                evenNumbers[index + 1] = evenNumbers[index] - evenNumbers[index + 1];
                evenNumbers[index] = evenNumbers[index] - evenNumbers[index + 1];
            }
        }
    }

    // for(let count = 0; count < evenNumbers.length; count++){
    //     for(let index = 0; index < evenNumbers.length; index++){
    //         if(evenNumbers[index] < evenNumbers[index + 1]){
    //             let swap = evenNumbers[index + 1]
    //             evenNumbers[index + 1] = evenNumbers[index]
    //             evenNumbers[index] = swap;
    //         }
    //     }
    // }


     return evenNumbers;
}

module.exports = {getEvenNumbers, sortEvenNumbers};