export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol>
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="flex">
            {row.map((symb, colIndex) => (
              <li key={colIndex}>
                <button
                  className="w-[180px] h-[180px] m-2 text-[7rem] font-serif text-yellow-950 bg-yellow-100"
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={symb !== null}
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
