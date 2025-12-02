number = int(input("Enter a number: "))

og_number = number
digit = 0
multiple = 0

while number != 0:

	digit = number % 10
	multiple += (digit ** 3)
	number /= 10;

if og_number == multiple:

	print("It is an Armstrong Number!")

else: 

	print("Oops try again")