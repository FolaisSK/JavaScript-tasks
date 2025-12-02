for count in range(1, 1001):
	sum_factors = 0

	for index in range(1, count // 2 + 1):
		if count % index == 0:
			sum_factors += index

	if count == sum_factors:
		print(count) 
