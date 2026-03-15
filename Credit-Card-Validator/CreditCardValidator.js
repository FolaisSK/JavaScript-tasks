const prompt = require('prompt-sync')();

main()

function main(){
    let cardNumber = prompt('Hello Kindly Enter Card Details To Verify: ');
    output(cardNumber)
}

function output(card){
    console.log("*******************************************")
    console.log("**Credit Card Type: ", getCardType(card));
    console.log("**Credit Card Number: ", card);
    console.log("**Credit Card Digit Length: ", getCardLength(card));
    console.log("**Credit Card Validity Status: ", getCardValidityStatus(card));
    console.log("*******************************************");
}


function getCardLength(card){
    return card.length
}

function getCardType(card){
    if(getCardLength(card) < 13 || getCardLength(card) > 16) return null
    if(card.charAt(0) === "4") return "Visa Card"
    if(card.charAt(0) === "5") return "MasterCard"
    if(card.charAt(0) === "3" && card.charAt(1) === "7") return "American Express Cards"
    if(card.charAt(0) === "6") return "Discover Cards"
}

function getSumOfRightToLeftDoubles(card){
    let sum = 0
    let doubledValue = 0
    for(let i = getCardLength(card) - 2; i >= 0; i -= 2){
        doubledValue = card[i] * 2
        if(doubledValue > 9){
            doubledValue = getSumOfDigits(doubledValue)
        }
        sum += doubledValue
    }
    return sum
}

function getSumOfOddPlacedDigitsRightToLeft(card){
    let sum = 0
    for(let i = getCardLength(card) - 1; i >= 0; i -= 2){
        sum += parseInt(card[i])
    }
    return sum
}

function addSums(card){
    return getSumOfRightToLeftDoubles(card) + getSumOfOddPlacedDigitsRightToLeft(card)
}

function validateCard(card){
    let result = addSums(card)
    if(result % 10 === 0) return true
    return false
}

function getCardValidityStatus(card){
    if(validateCard(card)) return "Valid!!!"
    return "Invalid!!!"
}

function getSumOfDigits(number){
    let sum = 0
    let digitOne = 1
    let digitTwo = number % 10
    sum = digitOne + digitTwo
    return sum
}


module.exports = {getCardLength, getCardType, getSumOfRightToLeftDoubles, getSumOfOddPlacedDigitsRightToLeft, addSums, validateCard}