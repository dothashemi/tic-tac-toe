import { useState } from "react";

import Player from "./components/Player.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <div
          id="game-container"
          className="mx-auto my-16 p-3 w-[40%] rounded bg-gray-800 text-white"
        >
          <ol
            id="players"
            className="flex justify-center items-center space-x-16"
          >
            <Player name="Player 1" symbol="X" />
            <Player name="Player 2" symbol="O" />
          </ol>

          <div>BOARD</div>
        </div>
      </main>
    </>
  );
}

export default App;
