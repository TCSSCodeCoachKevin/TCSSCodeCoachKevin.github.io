"""PROMPT: Given 2 strings, write a method to decide if they are permutations."""

#get data
first = input("Enter a string\n")
second = input("Enter a second string\n")
isPermutation = False

if len(first) != len(second):
    print("Not a permutation")
else:
    #check if one string contains same letters as other string
    for x in range(len(first)):
        letter = first[x]

        if letter in second:
            isPermutation = True
            continue
        else:
            break
if isPermutation:
    print("Is a permutation")
else:
    print("Not a permutation")
