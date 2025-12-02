public class LeapYearsCounter{

	public static void main(String... args){
		
		int total = 0;
		for(int count = 1900; count <= 2025; count ++){

			if((count % 4 == 0 && count % 100 != 0) || (count % 400 == 0))

			total += 1;
			
		}

		System.out.println("Number of leap years from 1900 to 2025 are " + total);
	}

}