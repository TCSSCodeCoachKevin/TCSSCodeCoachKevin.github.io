# Write code to remove duplicates from an unsorted List.

LIST = [
  "stick",
  "apples",
  "lemons",
  "cat",
  "stick",
  "dog",
  "lemons",
  "apples"
]

for i in LIST:
  x = i
  LIST.remove(x)
  if x not in LIST:
    LIST.append(x)

print(LIST)
