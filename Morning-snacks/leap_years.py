for count in range(1900, 2026, 1):
	if count % 4 == 0 and count % 100 != 0 or count % 400 	== 0: 
		print(count)