let total = 0;

for(let count = 1900; count <= 2025; count ++){

	if((count % 4 == 0 && count % 100 != 0) || (count % 400 == 0))

	total += 1;

}

console.log("Number of leap years from 1900 to 2025 are " + total);