import random

game_over = False

wins = 0
ties = 0
losses = 0
print("Welcome to rock paper scissors")

while game_over == False:
     
    randomNumber = random.randint(1,3)
    player = input("Choose Rock Paper or Scissors\n").lower()
    cpu = ""

    if randomNumber == 1:
        cpu = "rock"

    elif randomNumber == 2:
        cpu = "paper"

    else:
        cpu = "scissors"

    print("The computer chose: " + cpu)

    if cpu == player:
        print("Its a tie!")
        ties += 1

    elif cpu == "rock" and player == "scissors":
        print("You lost!")
        losses += 1
        
    elif cpu == "paper" and player == "rock":
        print("You lost!")
        losses += 1

    elif cpu == "scissors" and player == "paper":
        print("You lost!")
        losses += 1

    else:
        print("You Won!")
        wins += 1

    print("Wins: " , wins, "\nTies: " , ties, "\nLosses: " , losses)

    player = input("Play Again?\n").lower()
    
    if player == "yes":
        continue
    
    else:
        print("Thanks for Playing!")
        exit()
