import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameboard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameboard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });

    onSelectSquare();
  }

  return (
    <ol>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="flex">
            {row.map((symb, colIndex) => (
              <li key={colIndex}>
                <button
                  className="w-[180px] h-[180px] m-2 text-[7rem] font-serif text-yellow-950 bg-yellow-100"
                  onClick={() => handleSelectSquare(rowIndex, colIndex)}
                >
                  {symb}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
