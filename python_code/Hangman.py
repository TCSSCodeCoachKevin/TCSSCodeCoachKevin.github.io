import random

print("Welcome to Hangman!")
# Create List of words for game
words = ["chair", "batman", "website", "college", "sign"]
# Create Lists
usedLetters = list()
correctLetters = list()
chances = 6
is_player_wrong = False
# Shuffle List 
random.shuffle(words)
# Pick random word
word = random.choice(words)

#TEST
print(word)
#TEST

""" Hide word """
hidden_word = ""
for i in range(len(word)):
  hidden_word += "_"
print(hidden_word)

""" IN GAME """
while chances > 0:
  while True:
    is_player_wrong = False
    # Get Player Guess
    player_letter = input("Guess a letter!\n").lower()
    if player_letter in usedLetters:
      print("Chose letter already")
      continue
    # Prevent player from guessing nothing or more than a letter
    elif len(player_letter) != 1:
      print("1 letter at a time")
      continue
    else:
      break
  usedLetters.append(player_letter)
  hidden_word = ""
  # Update Word
  for letter in range(len(word)):
    # Player guessed correctly
    if player_letter == word[letter] or word[letter] in correctLetters:
      is_player_wrong = False
      hidden_word += word[letter]
      correctLetters.append(word[letter])
    # Player guessed wrong
    else:
      is_player_wrong = True
      hidden_word += "_"
  # Check if wrong
  if is_player_wrong:
    chances -= 1
    print("Chances: " + str(chances))
  #CHeck for win
  if hidden_word == word:
    break
    
  print(hidden_word)
  print("Used Letters", usedLetters)
  
print("WINNER")
