import java.util.Scanner;
public class GuessTheNumber {
	
	public static void main(String [] kevin) {
		
		Scanner s = new Scanner (System.in);
		int lives = 5;
		boolean winner = false;
		System.out.println("Welcome to Guess the Number!" + "\nWhat is the range you would like?");
			int range = s.nextInt();
		int r1 = (int) (Math.random() * range ) + 1;
		System.out.println("Pick a random number between 1 and " + range);
		do {
			int guess = s.nextInt();
		
		if (guess != r1 && lives < 0) {
			System.out.println("Game Over!");
		}
		else if (guess == r1 && lives > 0) {
			System.out.println("Correct!");
			winner = true;
		}
		else {
			System.out.println("Try again!" + "\nLives: " + lives);
		}
	}
		while (winner == false);
		System.out.println("You win!");
		s.close();
	}

}
