import random

winner = False
board = [["-", "-", "-"], 
        ["-", "-", "-"],
        ["-", "-", "-"]]
        
def PlacePlayerX(player_spot):
  x = int(player_spot[0])
  y = int(player_spot[1])
  
  #Check if spot is free
  if board[x][y] == "-":
    board[x][y] = "X"
    CheckForWinner(board)
  else:
    print("No cheating!")

def CheckForWinner(board):
  player = ""
  #Check Row 1
  if board[0][0] == board[0][1] == board[0][2]:
    player = board[0][0]
    winner = True
  #Check Row 2
  elif board[1][0] == board[1][1] == board[1][2]:
    player = board[1][0]
    winner = True
  #Check Row 3
  elif board[2][0] == board[2][1] == board[2][2]:
    player = board[2][0]
    winner = True 
  #Check Column 1
  elif board[0][0] == board[1][0] == board[2][0]:
    player = board[0][0]
    winner = True
  #Check Column 2
  elif board[0][1] == board[1][1] == board[2][1]:
    player = board[0][0]
    winner = True
  #Check Column 3
  elif board[0][2] == board[1][2] == board[2][2]:
    player = board[0][0]
    winner = True
  #Check Diagnols
  elif board[0][0] == board[1][1] == board[2][2]:
    winner = True
    player = board[0][0]
  elif board[2][0] == board[1][1] == board[0][2]:
    winner = True
    player = board[2][0]
  if player == "-":
    winner = False
  else:
    print(player + " Won!")
    exit()
    
def PlaceCPU(board):
  x = random.randint(0, 2)
  y = random.randint(0, 2)
  
  if board[x][y] == "-":
    board[x][y] = "O"
  else:
    PlaceCPU(board)
    DisplayBoard(board)
    CheckForWinner(board)

def DisplayBoard(board):
  for i in range(len(board)):
    for j in range(len(board[0])):
      #Print without new line
      print board[i][j],
    print("")

print("Welcome to Tic Tac Toe\n")

while not winner:
  #Start Game
  DisplayBoard(board)
  #Get Where Player Puts 'X' on board
  userSelection = input("X's turn, choose a location ex.(0,0) left corner\n")
  #Place X on board
  PlacePlayerX(userSelection)
  #Computer Turn
  PlaceCPU(board)