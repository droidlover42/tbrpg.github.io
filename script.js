import java.util.Scanner

public class Game {
  Scanner myScanner = new Scanner(System.in);
	Scanner enterScanner = new Scanner(System.in);
	int.playerHP;
	String playerName;
	String playerWeapon;
	int choice;
	int monsterHP;
	
	
	int goldRing
	
public static void main(String[] args){
	
	Game dublin;
	dublin = new Game();
	
	
	dublin.playerSetup();
	dublin.townGate();
	
}

public void playerSetup(){
	
	
	playerHP = 10;
	monsterHP = 15;
	
	
	playerWeapon = "Sword"
	
	System.out.println("Your HP:"+playerHP);
	System.out.println("Your Weapon:"+playerWeapon);
	
	
	System.out.println("Please enter your name here");
	
	
	playerName= =myScanner.nextLine();
	
	
	System.out.println("Hello "+playerName +", let's start the game!");
	
	
}


public void townGate() {
	
	System.out.println("\n--------------------------------------------------------------------------------------------------------------------\n");
	System.out.println("You are at the gate of the town");
	System.out.println("A guard is standing in front of you");
	System.out.println("");
	System.out.println("What do you want to do");
	System.out.println("1: Talk to the 
	System.out.println("3: Leave");
	System.out.println("\n--------------------------------------------------------------------------------------------------------------------\n");

	
	choice = myScanner.nextlnt();
	
	if(choice == 1){
		if(goldRing == 1){
			ending();
		}else{
			fight();
		}
	}
	
	
	public void attack(){
		int playerDamage = 0
		
		
		if(playerWeapon equals("Sword")){
			playerDamage = new java.util.Random().nextlnt(5);
		}else if (playerDamage = 
			
