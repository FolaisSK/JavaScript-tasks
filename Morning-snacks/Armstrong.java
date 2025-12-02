import java.util.Scanner;

public class Armstrong{

	public static void main(String... args){

		Scanner input = new Scanner(System.in);

		System.out.print("Enter a number: ");
		int number = input.nextInt();

		int ogNumber = number;
		int digit = 0;
		int multiple = 0;

		while(number != 0){

			digit = number % 10;
			multiple += (digit * digit * digit);
			number /= 10;
		}

		if(ogNumber == multiple){

			System.out.println("It is an Armstrong Number!");

		}else{

			System.out.println("Oops try again");

		}

	}

}