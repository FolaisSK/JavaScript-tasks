first_number = int(input("Enter a number: "))
second_number = int(input("Enter a number: "))

lcm = 0

if first_number >= second_number:
	lcm = first_number
else:
	lcm = second_number

while True:
	if lcm % first_number == 0 and lcm % second_number == 0:
		break
	lcm += 1

print("The LCM is ", lcm)