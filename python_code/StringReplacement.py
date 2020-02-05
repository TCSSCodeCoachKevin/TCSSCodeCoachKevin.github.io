# PROMPT: Write a method to replace all spaces in a string with '%20'

def replace_spaces(string):
  for i in range(len(string)):
    if string[i] == " ":
      string = string.replace(string[i], "%20")
    else:
      continue
  return string
  
  
#BEGIN PROGRAM
string = input("Enter a string with spaces\n")

if " " in string:
  print(replace_spaces(string))
else:
  print(string)
