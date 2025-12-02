let number = prompt("Enter a number: ");

let ogNumber = number;
let factorialSum = 0;

while(number > 0){

	let digit = number % 10;
	let factorial = 1;

	for(let count = 1; count <= digit; count++){

		factorial *= count;

	}
	
	factorialSum += factorial;
	number /= 10;

}

if (factorialSum == ogNumber){

	console.log(ogNumber + " is a strong number!");

}else{

	console.log("Oops try again");

}