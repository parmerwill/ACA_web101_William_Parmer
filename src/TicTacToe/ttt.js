public class TicTacToe {
  2
   
  3
      private char[][] board; 
  4
      private char currentPlayerMark;
  5
               
  6
      public TicTacToe() {
  7
          board = new char[3][3];
  8
          currentPlayerMark = 'x';
  9
          initializeBoard();
  10
      }
  11
       
  12
       
  13
      // Set/Reset the board back to all empty values.
  14
      public void initializeBoard() {
  15
           
  16
          // Loop through rows
  17
          for (int i = 0; i < 3; i++) {
  18
               
  19
              // Loop through columns
  20
              for (int j = 0; j < 3; j++) {
  21
                  board[i][j] = '-';
  22
              }
  23
          }
  24
      }
  25
       
  26
       
  27
      // Print the current board (may be replaced by GUI implementation later)
  28
      public void printBoard() {
  29
          System.out.println("-------------");
  30
           
  31
          for (int i = 0; i < 3; i++) {
  32
              System.out.print("| ");
  33
              for (int j = 0; j < 3; j++) {
  34
                  System.out.print(board[i][j] + " | ");
  35
              }
  36
              System.out.println();
  37
              System.out.println("-------------");
  38
          }
  39
      }
  40
       
  41
       
  42
      // Loop through all cells of the board and if one is found to be empty (contains char '-') then return false.
  43
      // Otherwise the board is full.
  44
      public boolean isBoardFull() {
  45
          boolean isFull = true;
  46
           
  47
          for (int i = 0; i < 3; i++) {
  48
              for (int j = 0; j < 3; j++) {
  49
                  if (board[i][j] == '-') {
  50
                      isFull = false;
  51
                  }
  52
              }
  53
          }
  54
           
  55
          return isFull;
  56
      }
  57
       
  58
       
  59
      // Returns true if there is a win, false otherwise.
  60
      // This calls our other win check functions to check the entire board.
  61
      public boolean checkForWin() {
  62
          return (checkRowsForWin() || checkColumnsForWin() || checkDiagonalsForWin());
  63
      }
  64
       
  65
       
  66
      // Loop through rows and see if any are winners.
  67
      private boolean checkRowsForWin() {
  68
          for (int i = 0; i < 3; i++) {
  69
              if (checkRowCol(board[i][0], board[i][1], board[i][2]) == true) {
  70
                  return true;
  71
              }
  72
          }
  73
          return false;
  74
      }
  75
       
  76
       
  77
      // Loop through columns and see if any are winners.
  78
      private boolean checkColumnsForWin() {
  79
          for (int i = 0; i < 3; i++) {
  80
              if (checkRowCol(board[0][i], board[1][i], board[2][i]) == true) {
  81
                  return true;
  82
              }
  83
          }
  84
          return false;
  85
      }
  86
       
  87
       
  88
      // Check the two diagonals to see if either is a win. Return true if either wins.
  89
      private boolean checkDiagonalsForWin() {
  90
          return ((checkRowCol(board[0][0], board[1][1], board[2][2]) == true) || (checkRowCol(board[0][2], board[1][1], board[2][0]) == true));
  91
      }
  92
       
  93
       
  94
      // Check to see if all three values are the same (and not empty) indicating a win.
  95
      private boolean checkRowCol(char c1, char c2, char c3) {
  96
          return ((c1 != '-') && (c1 == c2) && (c2 == c3));
  97
      }
  98
       
  99
       
  100
      // Change player marks back and forth.
  101
      public void changePlayer() {
  102
          if (currentPlayerMark == 'x') {
  103
              currentPlayerMark = 'o';
  104
          }
  105
          else {
  106
              currentPlayerMark = 'x';
  107
          }
  108
      }
  109
       
  110
       
  111
      // Places a mark at the cell specified by row and col with the mark of the current player.
  112
      public boolean placeMark(int row, int col) {
  113
           
  114
          // Make sure that row and column are in bounds of the board.
  115
          if ((row >= 0) && (row < 3)) {
  116
              if ((col >= 0) && (col < 3)) {
  117
                  if (board[row][col] == '-') {
  118
                      board[row][col] = currentPlayerMark;
  119
                      return true;
  120
                  }
  121
              }
  122
          }
  123
           
  124
          return false;
  125
      }
  126
  }
  


