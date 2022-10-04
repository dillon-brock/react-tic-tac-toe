import { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [active, setActive] = useState(true);
  const [gameMessage, setGameMessage] = 'Your Turn X';

  const wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  const checkGameEnd = () => {
    let fullBoard = false;
    let winner = false;
    if (!board.filter(box => box === '').length) fullBoard = true;
    for (const win in wins) {
      winner = !!board.filter((box, i) => win.includes(i))
        .reduce((a, b) => (a === b) ? a : NaN);
      if (winner) break;
    }
    if (winner) {
      setActive(false);
      setGameMessage(`${currentPlayer} wins!`);
    }
    else if (fullBoard) {
      setActive(false);
      setGameMessage(`It's a cats game!`);
    }

  };

  const takeTurn = (index) => {
    if (board[index] === '' && active) {
      setBoard(prevState => prevState.map((val, i) => i === index ? currentPlayer : val));
      setCurrentPlayer(prevPlayer => prevPlayer === 'X' ? 'O' : 'X');
      setGameMessage(`Your Turn ${currentPlayer}`);
    }
  };

  return <GameContext.Provider value={{ board, setBoard, currentPlayer, setCurrentPlayer, takeTurn }}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };