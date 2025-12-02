import java.util.Scanner;

public class StrongNumber{

	public static void main (String... args){

		Scanner input = new Scanner(System.in);

		System.out.print("Enter a number: ");
		int number = input.nextInt();

		int ogNumber = number;
		int factorialSum = 0;

		while(number > 0){

			int digit = number % 10;
			int factorial = 1;

			for(int count = 1; count <= digit; count ++){

				factorial *= count;
			}

			factorialSum += factorial;
			number /= 10;
		}

		if(factorialSum == ogNumber){

			System.out.println(ogNumber + " is a strong number!");

		}else{

			System.out.println("Oops try again");

		}


	}

}