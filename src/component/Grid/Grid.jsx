import React, { useState } from 'react';
import Card from '../Card/Card';
import isWinner from '../../helpers/checkWinner';

function Grid({ numberOfCards }) {
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [turn, setTurn] = useState(false); // X => false, O => true
  const [winner, setWinner] = useState(null);

  function play(index) {
    if (board[index] !== "" || winner) return; // Prevent overwriting or playing after game ends

    board[index] = turn ? 'O' : 'X';

    const win = isWinner(board, turn ? "O" : "X");
    if (win) {
      setWinner(win);
    }

    setBoard([...board]);
    setTurn(!turn);
  }

  function reset() {
    setTurn(false);
    setBoard(Array(numberOfCards).fill(""));
    setWinner(null);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-4">
      {winner && (
        <>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white bg-blue-600 p-4 rounded-lg mb-6">
            Winner is {winner}
          </h1>
          <button
            className="px-6 py-3 text-white bg-red-600 rounded-lg hover:bg-red-500 transition-colors duration-300"
            onClick={reset}
          >
            Reset
          </button>
        </>
      )}
      {!winner && (
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white bg-blue-600 p-4 rounded-lg mb-6">
          The current player is: {turn ? 'O' : 'X'}
        </h1>
      )}
      <div className="grid grid-cols-3 gap-2 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
        {board.map((ele, idx) => (
          <Card
            key={idx}
            onPlay={play}
            player={ele}
            index={idx}
            gameEnd={!!winner}
          />
        ))}
      </div>
    </div>
  );
}

export default Grid;
