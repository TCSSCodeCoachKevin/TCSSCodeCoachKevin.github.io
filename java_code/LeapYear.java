import java.util.*;
public class LeapYearTester {

	public static void main(String [] y) {
		
		boolean loop = true, isLeap;
		Scanner s = new Scanner (System.in);
		
		while (loop == true) {
			
		System.out.println("Please enter a year: ");
			int year = s.nextInt();
		
		
		if ((year % 4 == 0) && year % 100 != 0)  {
			
			isLeap = true;
			
		}
		
		else if ((year % 100 == 0) && year % 400 == 0) {
			
			isLeap = true;
		}
		
		else {
			
			isLeap = false;
			
		}
		
		if (isLeap) {
			
			System.out.println("it's a leap year");
		}
		else {
			
			System.out.println("not a leap year");
		}
		
		System.out.println("Enter another year?");
			s.nextLine();
			String p = s.nextLine();
			
		if (p.equals("yes")) {
			
			continue;
		}
		
		else {
			
			loop = false;
			
		}
	}
		s.close();
	}
}
