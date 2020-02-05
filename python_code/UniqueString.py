# PROMPT: Implement an algorithm to determine if a string has all unique characters.

string = input("Enter a string to see if its unique\n")
unique = True
letters = []

for i in range(len(string)):
  if string[i] not in letters:
    letters.append(string[i])
  else:
    unique = False
    break
#Check
if unique:
  print("String is Unique")
else:
  print("String isn't Unique")
