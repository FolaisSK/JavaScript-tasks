let firstNumber = prompt("Enter first number: ");
let secondNumber = prompt("Enter second number: ");

let gcd;

	for(count = 1; count <= firstNumber && count <= secondNumber; count++){

		if(firstNumber % count == 0 && secondNumber % count == 0){

		gcd = count;

		}


			

	}

	System.out.println("GCD is " + gcd);

