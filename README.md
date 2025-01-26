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
   Clone the repository to your local machine using the following command:
   ```bash
   git clone <repository_url>
