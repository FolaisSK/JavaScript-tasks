for count in range(1, 1001, 1):
	number = count
	multiple = 0

	while number != 0:
		digit = number % 10
		multiple =+ digit ** 3
		number /= 10

if multiple == count:
	print(count)