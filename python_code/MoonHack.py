items = [
"A: 3 liters of water",
"B: Shampoo",
"C: An extra Spacesuit",
"D: A shovel",
"E: A 10 day oxygen supply",
"F: Solar panels",
"G: The seeds for your mission",
"H: The soil for your mission",
"I: A 3 day food supply"
"J: A radio",
"K: Jetpack",
"L: Blunt Weapon"
]

print("It is the year 2049. You're on a solo mission to restock the base on the moon with soil & seeds to grow more plants.")
print("You have just landed but you are in trouble. You have landed 300 kilometers from the moon base!")
print("You can get to the base in 3 days on your lunar rover")
print("The lunar rover can only fit you in your spacesuit and 4 other items")
print("\nOut of the items below, which do you bring? \n")

#display list
for objects in items:
  print(objects)


user_choice = input("\nType the letter of the 4 items you would like to bring\n").upper()
user_list = list(user_choice.split(','))

if "A" not in user_list and :
  print("You will dehydrate without water.")
if "E" not in user_list:
  print("Without oxygen you can't breathe.")
if "F" not in user_list:
  print("Without solar panels, your rover wont have power to get you back to the base.")
if "I" not in user_list:
  print("You will starve without food.")

#check if all 4 items were selected
if "A" in user_list and "E" in user_list and "F" in user_list and "I" in user_list:
  print("Hooray! You picked the correct 4 items, you will make it to the moon base safely.")
else:
  print("You didn't pick the correct 4 items for survival, you won't back it back to the moon base safely.")

















  
  
