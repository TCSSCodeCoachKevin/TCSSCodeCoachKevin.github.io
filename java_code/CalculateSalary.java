

import java.util.*;

public class CalculateSalary {

	public static void main(String[] args) {
		
		Scanner s = new Scanner(System.in);
		boolean valid = false;
		
		System.out.println("Enter the hourly salary");
			double hourlyWage = s.nextDouble();
		System.out.println("How many hours do you work a week?");
			double weeklyHours = s.nextDouble();
			
		do {
			System.out.println("Would you like to know your weekly, monthly, or yearly income?");
				s.nextLine();
				String choice = s.nextLine();
				
				if (choice.equals("weekly")) {
					valid = true;
					double weeklySalary  = (hourlyWage * weeklyHours);
					System.out.println("Your weekly salary is " + weeklySalary);
					
				}
				
				else if (choice.equals("monthly")) {
					valid = true;
					double weeklySalary = (hourlyWage * weeklyHours);
					double monthlySalary = weeklySalary * 4;
					System.out.println("Your monthly salary is " + monthlySalary);
				}
				
				else if (choice.equals("yearly")) {
					valid = true;
					double weeklySalary = (hourlyWage * weeklyHours);
					double monthlySalary = (weeklySalary) * 4;
					double yearlySalary = (monthlySalary) * 12;
					System.out.println("Your yearly salary is " + yearlySalary);
					
				}
				
				else {
					
					System.out.println("Please choose a valid option: ");
				}
			}
			while (valid == false);
		
		s.close();

	}

}
 