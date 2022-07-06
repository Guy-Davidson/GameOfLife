# GameOfLife

1. Architecture:
  The app is divided in to a server and a clinet. 
  Each game starts of by initializing a game id, and then an initial config. 
  This allows the server to pre-calculate each game next state, so when a request comes in it gets answered right away.
  The client architecture is mainly divided to the controller and the board.
  The controller is responsible mostly for state management. 
  The board is populated by the 50x50 squares that manage their state independently. React Query allows that as the board state is global. 

2. Reasoning:
  Styled Components is a great choise for the app styling, making conditional styling like isActive feel natural. 
  React query is very useful for managaing server state, and a great use case here was the board state, 
  it also allows easy fetching interval which was useful implementing the Start button. 
  Recoil is a state management library I find the simplest to use, with intuitive features that follows React's local state logic.

3. Next thing I would develop:
  I would like to build a more sophisticated UI by allowing the user to add more complex shapes.
  The game has many intersting patterns that rotate, move, or evole through generations, and the ability to add them directly or
  save a certain shape can add alot to the game.
