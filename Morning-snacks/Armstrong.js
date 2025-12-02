let number = prompt("Enter a number: ");

let ogNumber = number;
let digit;
let multiple;

while(number != 0){

	digit = number % 10;
	multiple += (digit * digit * digit);
	number /= 10;
}

if (ogNumber == multiple){

	console.log("It is an Armstrong Number!")
}else{

	console.log("Oops try again")

}