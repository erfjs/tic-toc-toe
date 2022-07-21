import React from 'react';


const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
    type="button"
    aria-label={true}
      onClick={onClick}
      className={`square ${isWinningSquare ? 'winning' : ''} ${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
    >
      {value}
    </button>
  );
};

export default Square;
