import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

export default function Reset() {
  const { active } = useContext(GameContext);
  if (!active) return <button className='reset-button'>Reset Game</button>;
}