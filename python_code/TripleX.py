import random

level = 1

while True:
  print("You're a secret agent hacking into a level ", level, " facility.")

  #get random 3 digits
  if level >= 9:
    n1 = random.randint(1,9)
    n2 = random.randint(1,9)
    n3 = random.randint(1,9)
  else:
    n1 = random.randint(1,level)
    n2 = random.randint(1,level)
    n3 = random.randint(1,level)

  #add / multiply
  add = n1 + n2 + n3
  product = n1 * n2 * n3

  while True:
    #get user guess
    prompt = "The code adds to ", add, " & multiplies to ", product
    print("Enter the 3 digit code")
    user = input(prompt)

    if len(user) != 3:
      print("Must be 3 digits!")
      continue
    else:
      #check answer for the right code
      if int(user[0]) == n1 and int(user[1]) == n2 and int(user[len(user) - 1]) == n3:
          print("Success! Next Level!")
          level += 1
          break
      else:
        #check if wrong combo
        if str(n1) in user and str(n2) in user and str(n3) in user:
          print("Wrong Sequence! Try Again!")
          continue
        else:
          print("WRONG CODE. YOU GOT ARRESTED!")
          exit()

        
