import java.util.Scanner;

public class GreatestCommonDivisor{

	public static void main (String... args){

		Scanner input = new Scanner(System.in);

		System.out.print("Enter first number: ");
		int firstNumber = input.nextInt();

		System.out.print("Enter second number: ");
		int secondNumber = input.nextInt();

		int gcd = 0;


		for(int count = 1; count <= firstNumber && count <= secondNumber; count++){

			if(firstNumber % count == 0 && secondNumber % count == 0){

			gcd = count;

			}


			

		}

		System.out.println("GCD is " + gcd);

	}


}