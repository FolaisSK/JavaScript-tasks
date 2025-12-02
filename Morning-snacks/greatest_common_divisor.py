first_number = int(input("Enter first number: "))
second_number = int(input("Enter second number: "))

gcd = 0

for count in range(1, max(first_number, second_number) + 1):

	if first_number % count == 0 and second_number % count == 0:

		gcd = count

print(gcd)