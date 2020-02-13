"""

    Implement an algorithm to delete a node in the middle.

"""

myList = []
#Apply Any Amount of Values
myList.append("A")
myList.append("B")
myList.append("C")
myList.append("D")
myList.append("E")
myList.append("F")
myList.append("G")
myList.append("H")
#Get middle node
x = int((len(myList) - 1) / 2)
#remove it
y = myList[x]
myList.remove(y)
