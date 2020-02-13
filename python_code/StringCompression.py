""" Implement a method to perform basic string compression using the counts of repeated characters.

    EXAMPLE:
        I/P: aabcccccaaa
        O/P: a2b1c5a3

    Unless compressed string is longer return original string
"""

def compress_string(string):
  new_string = ""
  count = 1
  for i in range(len(string)):
    j = i
    j += 1
    try:
      #check if same
      if string[i] == string[j]:
        count += 1
      else:
        new_string += string[i]
        new_string += str(count)
        count = 1
    except:
      #last index for value of i
      new_string += string[i]
      #check what value
      j = i
      j -= 1
      if string[j] == string[i]:
        new_string += str(count)
      else:
        new_string += "1"
  #return
  if len(new_string) > len(string):
    print(string)
  else:
    print(new_string)


#START PROGRAM
string = input("Enter a string with repeated characters\n")
compress_string(string)
