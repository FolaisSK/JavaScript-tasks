number = int(input("Enter a number: "))

sum_of_factors = 0

for count in range(1, number, 1):

	if number % count == 0:

		sum_of_factors += count

if number == sum_of_factors:
	
	print("It is a Perfect Number!")

else:

	print("Oops try again, e no work")

		
