import React from 'react';
import Square from './Square';


const Board = ({ board, handleSquareEvent, winningSquare }) => {
  // Updating the position whenever clicked

  const updateSquare = position => {
    const isWinningSquare = winningSquare.includes(position);
    return (
      <Square
        value={board[position]}
        onClick={() => handleSquareEvent(position)}
        isWinningSquare={isWinningSquare}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {updateSquare(0)}
        {updateSquare(1)}
        {updateSquare(2)}
      </div>

      <div className="board-row">
        {updateSquare(3)}
        {updateSquare(4)}
        {updateSquare(5)}
      </div>

      <div className="board-row">
        {updateSquare(6)}
        {updateSquare(7)}
        {updateSquare(8)}
      </div>
    </div>
  );
};

export default Board;
