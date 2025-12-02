public class LeapYears{

	public static void main(String... args){

		for(int count = 1900; count <= 2025; count ++){

			if((count % 4 == 0 && count % 100 != 0) || (count % 400 == 0))

			System.out.println(count);
		
		}

	}

}