import java.util.Scanner;

public class Factorial{

	public static void main (String... args){

		Scanner input = new Scanner(System.in);	

		System.out.print("Enter a number: ");
		int number = input.nextInt();

		int count = 0;
		int factorial = 1;

		for(count = 1; count <= number; count++){

		factorial *= count;

		}

	System.out.println(factorial);

	}

}