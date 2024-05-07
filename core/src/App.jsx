import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
    );
  }

  return (
    <>
      <main>
        <div
          id="game-container"
          className="mx-auto my-8 px-6 pt-8 pb-6 w-fit rounded bg-gray-800 text-white shadow shadow-yellow-700"
        >
          <ol
            id="players"
            className="flex justify-center items-center mb-8 space-x-16"
          >
            <Player
              initialName="Player 1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <Player
              initialName="Player 2"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>

          <GameBoard
            onSelectSquare={handleSelectSquare}
            activePlayerSymbol={activePlayer}
          />
        </div>
      </main>
    </>
  );
}

export default App;
