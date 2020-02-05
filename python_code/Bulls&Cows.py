import random

#declaration
isograms = ["isogram", "chair", "keyboard", "computer", "plane", "cake", "mouse", "lap"]
player_isogram = ""
hidden_isogram = ""

print("Welcome to Bulls & Cows!")

#get random word from list
hidden_isogram = random.choice(isograms)

while player_isogram != hidden_isogram:
  while True:
    #get user guess
    prompt = "Enter a ", len(hidden_isogram), " letter word."
    player_isogram = input(prompt).lower()

    if len(player_isogram) == len(hidden_isogram):
      break
    else:
      print("Must be a ", len(hidden_isogram), " letter word.")
      continue

  #check player guess
  for i in range (len(player_isogram)):
    if player_isogram[i] == hidden_isogram[i]:
      print(player_isogram[i], " is a Bull!")
    else:
      print(player_isogram[i], " is a Cow!")

print("You won!")



  

  
