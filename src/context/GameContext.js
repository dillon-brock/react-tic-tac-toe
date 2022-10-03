import { useContext } from "react";

const GameContext = useContext();

const GameProvider = () => {
  const [board, setBoard] = useState(Array(9).fill(''));

  return <GameContext.Provider value = {{ board, setBoard }}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };