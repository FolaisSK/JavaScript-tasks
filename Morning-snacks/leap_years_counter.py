total = 0

for count in range(1900, 2026):
	
	if count % 4 == 0 and count % 100 != 0 or count % 400 == 0:

		total += 1

print("Number of leap years from 1900 to 2025 are ", total)