public class ArmstrongNumbersInARange{

	public static void main(String... args){
	
		for(int count = 1; count <= 1000; count++){
			int number = count;
			int multiple = 0;

			while(number != 0){

				int digit = number % 10;
				multiple += (digit * digit * digit);
				number /= 10;
			}

			if(multiple == count){

				System.out.println(count);

	
			}

		}

	}

}