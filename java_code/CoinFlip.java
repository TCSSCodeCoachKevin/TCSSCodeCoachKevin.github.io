
public class CoinFlip {

	public static void main(String[] args) {
		
		int coin = (int) ((Math.random() * 2) + 1);

		if (coin == 2) {
			System.out.println("Heads");
		}
		else {
			System.out.println("Tails");
		}
	}

}
 