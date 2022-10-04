import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

export default function Message() {
  const { gameMessage } = useContext(GameContext);

  return <h3>{gameMessage}</h3>;
}