export default function GameOver({ winner, onRematch }) {
  return (
    <>
      <div className="text-center">
        <h2>Game Over!</h2>
        {winner ? <p>{winner} Won!</p> : <p>Draw</p>}

        <p>
          <button
            className="m-3 p-3 border border-yellow-500"
            onClick={onRematch}
          >
            Rematch!
          </button>
        </p>
      </div>
    </>
  );
}
