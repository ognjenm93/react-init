import React from 'react';

const ToList = ({ stringLetters, onButtonPress, pressedLetters, gameOver }) => {
  let letters = stringLetters.split('');
  return (
    <div className="box">
      {letters.map((item, key) => (
        <button
          key={key}
          className="letter"
          onClick={() => onButtonPress(item)}
          disabled={(pressedLetters.indexOf(item) !== -1 || gameOver) ? true : false}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ToList;
