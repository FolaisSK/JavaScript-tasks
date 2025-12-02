public class PerfectNumbersInARange{

	public static void main(String... args){

		for(int count = 1; count <= 1000; count++){

			int sumOfFactors = 0;

			for(int index = 1; index <= count / 2; index++){

				if (count % index == 0){

					sumOfFactors += index;

				}
			}

			if (count == sumOfFactors){

				System.out.println(count);

			}
		}


	}


}