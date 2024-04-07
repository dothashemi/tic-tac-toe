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
          className="mx-auto my-16 px-6 pt-12 pb-6 w-[40%] rounded bg-gray-800 text-white shadow shadow-yellow-700"
        >
          <ol
            id="players"
            className="flex justify-center items-center space-x-16"
          >
            <Player initialName="Player 1" symbol="X" />
            <Player initialName="Player 2" symbol="O" />
          </ol>

          <div>BOARD</div>
        </div>
      </main>
    </>
  );
}

export default App;
