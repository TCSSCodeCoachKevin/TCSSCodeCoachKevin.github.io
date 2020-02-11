# Get User Input
try:
  number = int(input("Enter a number\n"))
  power = int(input("Enter another number\n"))
  
  if number >= power:
    if number % power == 0:
      print("Yes")
    else:
      print("No")
  else:
    print("First number must be greater")

except:
  print("MUST BE A NUMBER")


  