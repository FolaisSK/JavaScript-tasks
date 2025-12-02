for(let count = 1; count <= 1000; count++){

	let number = count;
	let multiple = 0;

	while(number != 0){

		let digit = number % 10;
		multiple += (digit * digit * digit);
		number /= 10;
	}

	if(multiple == count){

		console.log(count);

	}

}

