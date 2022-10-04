import { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [active, setActive] = useState(true);
  const [gameMessage, setGameMessage] = useState('Your Turn X');

  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];

  const checkGameEnd = (boardCopy) => {
    let fullBoard = false;
    let winner = false;
    if (!boardCopy.includes('')) fullBoard = true;
    for (const win of wins) {
      let checkedRow = boardCopy.filter((box, i) => win.includes(i));
      if (checkedRow.includes('')) continue;
      winner = checkedRow.reduce((a, b) => (a === b) ? a : false);
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
      const boardCopy = board;
      boardCopy[index] = currentPlayer;
      setBoard(prevState => prevState.map((val, i) => i === index ? currentPlayer : val));
      setCurrentPlayer(prevPlayer => prevPlayer === 'X' ? 'O' : 'X');
      setGameMessage(`Your Turn ${currentPlayer === 'X' ? 'O' : 'X'}`);
      checkGameEnd(boardCopy);
    }
  };

  return <GameContext.Provider value={{ board, setBoard, currentPlayer, setCurrentPlayer, gameMessage, active, takeTurn }}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };