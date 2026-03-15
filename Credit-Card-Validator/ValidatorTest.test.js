const {getCardLength, getCardType, getSumOfRightToLeftDoubles, getSumOfOddPlacedDigitsRightToLeft, addSums, validateCard} = require('./CreditCardValidator')

test("test for the length of credit card", () =>{
    let card = "4388576018402626"
    expect(getCardLength(card)).toEqual(16)
})

test("test that card is visa card", () =>{
    let card = "4388576018402626"
    expect(getCardLength(card)).toEqual(16)
    expect(getCardType(card)).toEqual("Visa Card")
})

test("test that card is is mastercard", () =>{
    let card = "5388576018402626"
    expect(getCardLength(card)).toEqual(16)
    expect(getCardType(card)).toEqual("MasterCard")
})

test("test that card is American Express", () =>{
    let card = "3788576018402626"
    expect(getCardLength(card)).toEqual(16)
    expect(getCardType(card)).toEqual("American Express Cards")
})

test("test that card is Discover Cards", () =>{
    let card = "6788576018402626"
    expect(getCardLength(card)).toEqual(16)
    expect(getCardType(card)).toEqual("Discover Cards")
})

test("test that card type is null if card length is not 13 - 16 digits", () =>{
    let card = "018402626"
    expect(getCardLength(card)).toEqual(9)
    expect(getCardType(card)).toEqual(null)
})

test("test that the sum of the double of every second digit from right to left is 37", () =>{
    let card = "4388576018402626"
    expect(getCardType(card)).toEqual("Visa Card")
    expect(getSumOfRightToLeftDoubles(card)).toEqual(37)
})

test("test that the sum of odd placed digits from right to left is 38", () =>{
    let card = "4388576018402626"
    expect(getCardType(card)).toEqual("Visa Card")
    expect(getSumOfRightToLeftDoubles(card)).toEqual(37)
    expect(getSumOfOddPlacedDigitsRightToLeft(card)).toEqual(38)
})

test("test that the sum of Right to Left Sums is 75", () =>{
    let card = "4388576018402626"
    expect(getCardType(card)).toEqual("Visa Card")
    expect(getSumOfRightToLeftDoubles(card)).toEqual(37)
    expect(getSumOfOddPlacedDigitsRightToLeft(card)).toEqual(38)
    expect(addSums(card)).toEqual(75)
})

test("test that the card is invalid if sum of Right to Left Sums is not divisible by 10", () =>{
    let card = "4388576018402626"
    expect(getCardType(card)).toEqual("Visa Card")
    expect(getSumOfRightToLeftDoubles(card)).toEqual(37)
    expect(getSumOfOddPlacedDigitsRightToLeft(card)).toEqual(38)
    expect(addSums(card)).toEqual(75)
    expect(validateCard(card)).toBeFalsy()
})

test("test that the card is valid if sum of Right to Left Sums is divisible by 10", () =>{
    let card = "4388576018410707"
    expect(getCardType(card)).toEqual("Visa Card")
    expect(getSumOfRightToLeftDoubles(card)).toEqual(29)
    expect(getSumOfOddPlacedDigitsRightToLeft(card)).toEqual(41)
    expect(addSums(card)).toEqual(70)
    expect(validateCard(card)).toBeTruthy()
})