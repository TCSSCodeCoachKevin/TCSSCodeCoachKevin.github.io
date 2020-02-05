import random

#Global Variables
guesses = 0
player_guess = ""

""" FUNCTIONS """
def jumble_word(word):
  answer = ""
  letters = []
  for i in range(len(word)):
    letters.append(word[i])
  for i in range(len(word)):
    answer += letters[random.randint(0, len(letters) - 1)]
    letters.remove(answer[len(answer) - 1])
  print(answer + "\n")

# Create Game Words
words = ["dirt", "monkey", "soup", "mountain", "cake"]

# Select Random Word From List
answer = random.choice(words).lower()


""" BEGIN GAME """
# Display Jumbled Word To The Player
jumble_word(answer)

while player_guess != answer:
  
  if player_guess != "":
    print("Wrong!\n")
  # Get Player Guess
  player_guess = input("Guess the word!:\n").lower()
  
  # Check for too many letters / too little letters
  if len(player_guess) != len(answer):
    print("Word is " + str(len(answer)) + str(" letters long."))
  guesses += 1
  
print("Excellent Work! It took you " + str(guesses) + " time(s)")
