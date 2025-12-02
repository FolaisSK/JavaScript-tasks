let number = prompt("Enter a number: ");

let sumOfFactors = 0;

for(let count = 1; count < number; count++){

	if (number % count == 0){

	sumOfFactors += count;

	}
}

if (number == sumOfFactors){

console.log("It is a Perfect Number!")

}else{

console.log("Oops try again, e no work")

}