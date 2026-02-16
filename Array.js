const numbers = [5, "sharp", false, {}, null]; //Literal Method
//const array = new Array(numbers); // constructor Method
//console.log(array);

const array2 = new Array(2);
array2[0] = 2;
array2[15] = 19;
console.log(array2);

numbers.push("woww"); // append to the back
console.log(numbers);
let removed = numbers.pop() // remove from the back
console.log(removed);

numbers.unshift(7)
numbers.unshift(9) // append to the front

console.log(numbers);

let unshifted = numbers.shift() // removes from the front
console.log(unshifted);
console.log(numbers);

const data = [false, 6, "one", 8, null]
let slice = data.slice(2) // slices with start and stop index
console.log(slice);

let spliced = data.splice(2) // removes from array
console.log(data);
console.log(spliced);
