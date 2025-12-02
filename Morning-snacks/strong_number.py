number = int(input("Enter a number:"))

og_number = number
factorial_sum = 0

while number > 0:

	digit = number % 10
	factorial = 1

	for count in range(1, digit + 1):
		factorial *= count

	factorial_sum += factorial
	number /= 10

if factorial_sum == og_number:

	print(og_number, " is a strong number!")

else:

	print(og_number, " aint it bro")