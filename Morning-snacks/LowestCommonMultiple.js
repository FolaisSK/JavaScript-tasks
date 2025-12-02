let firstNumber = prompt("Enter a number: ");
let secondNumber = prompt("Enter a number: ");

let lcm = 0;

if(firstNumber >= secondNumber){
	lcm = firstNumber;
}else{
	lcm = secondNumber;
}

while (true) {

	if(lcm % firstNumber == 0 && lcm % secondNumber == 0){
		break;
	}
		
	lcm++;
}

console.log("The LCM is " + lcm)

