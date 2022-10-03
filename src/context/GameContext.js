import { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameMessage, setGameMessage] = 'Your Turn X';

  const takeTurn = (index) => {
    setBoard(prevState => prevState.map((val, i) => i === index ? currentPlayer : val));
    setCurrentPlayer(prevPlayer => prevPlayer === 'X' ? 'O' : 'X');
  };

  return <GameContext.Provider value={{ board, setBoard, currentPlayer, setCurrentPlayer, takeTurn }}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };