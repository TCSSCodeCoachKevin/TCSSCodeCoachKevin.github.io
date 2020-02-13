"""

    Implement an algorithm to find the kth to last element of a linked list

"""

myList = []

myList.append(2)
myList.append(400)
myList.append(64)
myList.append(235)
myList.append(999999)
print(myList)
k = int(input("Enter k"))
index = len(myList) - k
print(myList[index])

