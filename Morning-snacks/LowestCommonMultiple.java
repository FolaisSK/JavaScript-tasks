 import java.util.Scanner;

public class LowestCommonMultiple{

	public static void main(String... args){

		Scanner input = new Scanner(System.in);

		System.out.print("Enter first number: ");
		int firstNumber = input.nextInt();

		System.out.print("Enter second number: ");
		int secondNumber = input.nextInt();

		int lcm = 0;

		if(firstNumber >= secondNumber){
			lcm = firstNumber;
		}else{
			lcm = secondNumber;
		}

		while (true) {

			if(lcm % firstNumber == 0 && lcm % secondNumber == 0){
				break;
			}
		
		lcm++;
		}

		System.out.println("The LCM is " + lcm);

	}
}