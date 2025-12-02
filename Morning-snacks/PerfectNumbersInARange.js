for(let count = 1; count <= 1000; count++){

	let sumOfFactors = 0;

	for(let index = 1; index <= Math.floor(count / 2); index++){

		if (count % index == 0){

			sumOfFactors += index;

		}

		if (count == sumOfFactors){

			console.log(count);

		}

	}

}