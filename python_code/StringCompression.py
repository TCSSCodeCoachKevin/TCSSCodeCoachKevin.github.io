""" Implement a method to perform basic string compression using the counts of repeated characters.

    EXAMPLE:
        I/P: aabcccccaaa
        O/P: a2b1c5a3

    Unless compressed string is longer return original string
"""

def compress_string(line):
  new_string = ""
  count = 1
  for i in range(len(line)):
    j = i
    j += 1
    try:
      if line[i] == line[j]:
        count += 1
      else:
        new_string += line[i]
        new_string += str(count)
        count = 1
    except:
      # last index of value i
      new_string += line[i]
      j = i
      j -= 1
      if line[i] == line[j]:
        new_string += str(count)
      else:
        new_string += "1"
  #return
  if len(new_string) > len(line):
    print(line)
  else:
    print(new_string)

string = input("Enter a string with repeated characters\n")
compress_string(string)