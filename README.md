# Multiplayer Chess Platform

A real-time multiplayer chess platform built using WebSockets and `chess.js` to enable players to compete online with seamless gameplay.

---

## Features
- Real-time chess gameplay with two-player matchmaking.
- Automatic validation of chess moves using `chess.js`.
- Turn-based gameplay enforcement.
- Game-ending conditions (checkmate, stalemate, etc.).
- WebSocket-based communication for real-time updates.

---

## How It Works
1. **Player Connection**:  
   Players connect to the server via WebSocket, and the server manages their sessions.
   
2. **Matchmaking**:  
   When two players connect:
   - The first player waits for an opponent.
   - When a second player connects, the game begins.
   
3. **Game Logic**:  
   - The chessboard state is managed by the `chess.js` library.
   - The server validates moves and enforces rules.
   
4. **Gameplay Flow**:  
   - Players take turns making moves.
   - The server updates the opponent in real time.

---

## File Structure

```plaintext
├── Game.ts            # Manages individual games, including moves and game state.
├── GameManager.ts     # Handles matchmaking and manages all ongoing games.
├── index.ts           # WebSocket server entry point.
├── messages.ts        # Defines constants for WebSocket message types.
├── package.json       # Project dependencies and scripts.

```
---

## Setup and Installation

### Prerequisites
- Node.js (v16 or above)

### Installation
1. **Clone the repository**  
2. **Install dependencies**
   npm install
### Running the Server 
1. **Start the Server**

---

## WebSocket API

### Message Types

| **Message Type** | **Description**                                           |
|-------------------|-----------------------------------------------------------|
| `INIT_GAME`       | Initializes the game and assigns colors to the players.   |
| `MOVE`            | Sent by a player to make a move on the board.             |
| `GAME_OVER`       | Notifies both players of the game's result (winner/loser).|

---

## Example Flow

### 1. Player 1 Connects
- Player 1 connects to the server.
- They are set as the `pendingUser`, waiting for the second player.

### 2. Player 2 Connects
- Player 2 connects to the server.
- A game is created with Player 1 and Player 2, and they are assigned their respective colors (`white` for Player 1 and `black` for Player 2).

### 3. Gameplay
- Players alternate sending `MOVE` messages to make their moves.
- The server validates each move, ensuring it follows the chess rules and updates the opponent with the new move.

### 4. Game Over
- The server detects game-ending conditions, such as:
  - Checkmate
  - Stalemate
  - Draw (e.g., insufficient material, threefold repetition)
- A `GAME_OVER` message is sent to both players, indicating the winner (or a draw).

---

## Screenshots

![Gameplay Screenshot](path_to_screenshot.png)

### Example Gameplay in Action:
![Gameplay GIF](path_to_gif.gif)

---

## Future Enhancements

- **Frontend Integration**: Build a user interface for better interaction, making the game accessible through a web interface.
- **Ranking System**: Introduce an ELO-based player ranking system to track and compare player performance.
- **Reconnection Support**: Allow players to reconnect to their game if disconnected mid-game to ensure uninterrupted play.
- **Spectator Mode**: Enable others to watch live games, adding a spectator feature for an engaging experience.

---

## Technologies Used

- **Node.js**: Server-side runtime for handling the WebSocket server and managing the game logic.
- **ws**: WebSocket library for establishing real-time communication between the server and the clients.
- **chess.js**: Library for chess rules and move validation, ensuring each move is legal and the game state is accurately maintained.
- **TypeScript**: For type-safe development, providing better code maintainability and error prevention.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **chess.js**: Chessboard logic and validation.
- **ws**: WebSocket implementation.



